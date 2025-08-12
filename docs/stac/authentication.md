# Authentication

All write requests require authentication. There are currently two supported authentications methods:

::: warning
Basic and Token authentication have been removed in `v1` of STAC API.
:::

## Session Authentication

When using the browsable API, the user can simply use the admin interface for logging in.
The service issues a session cookie which the browser can use to authenticate itself and perform write requests.
This authentication method is intended only for users accessing the admin interface via a web browser.
Non-browser clients and API endpoints are not guaranteed to work with session authentication.

## JSON Web Token Authentication

The user authenticates with a JSON Web Token (JWT) passed in the
`Authorization` header with the `Bearer` HTTP authentication scheme as
described in
[RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750#section-2.1).

Here is an example using curl, assuming the JWT value is `123456`:

```bash
curl --request POST \
--url https://data.geoadmin.ch/api/stac/v1/collections/ch.swisstopo.swisstlmregio/items/swisstlmregio-2020/assets \
--header 'Authorization: Bearer 123456' \
--header 'Content-Type: application/json' \
--data '{
    "id": "fancy_unique_id",
    "item": "swisstlmregio-2020",
    "title": "My title",
    "type": "application/x.filegdb+zip",
    "description": "My description",
    "proj:epsg": 2056,
    "file:checksum": "12200ADEC47F803A8CF1055ED36750B3BA573C79A3AF7DA6D6F5A2AED03EA16AF3BC"
}'
```

Tokens are obtained from the [Amazon Cognito InitiateAuth API](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html).

Example using curl and jq:

```bash
curl --request POST \
--url https://cognito-idp.eu-central-1.amazonaws.com/ \
--header 'Content-Type: application/x-amz-json-1.1' \
--header 'X-Amz-Target: AWSCognitoIdentityProviderService.InitiateAuth' \
--data '{
    "AuthFlow": "USER_PASSWORD_AUTH",
    "AuthParameters": {
      "PASSWORD": "I_love_Minnie_Mouse",
      "USERNAME": "MickeyMouse"
    },
    "ClientId": <CLIENT_ID>
}' | jq -r .AuthenticationResult.AccessToken
```

Replace `<CLIENT_ID>` with the correct client identifier, which you should receive along with your username and password.

The response from `InitiateAuth` is a JSON document.
Use the `AccessToken` from the response to authenticate against the STAC API."
In some cases, the response may not contain the token (e.g., if the password must be updated or multi-factor authentication is required)
The client is responsible for handling these cases.
[AWS provides an SDK](https://aws.amazon.com/developer/tools/) which may
make this easier.

The access token is valid only for a limited time, as specified by the `AuthenticationResult.ExpiresIn` field in the response.
You need to refresh it periodically, either by obtaining a new JWT or by [using the refresh token](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-the-refresh-token.html).
The refresh token is typically valid for a longer time period.
