# Authentication

All write requests require authentication. We support two authentication methods:

1. Session authentication: For users accessing the data via the web-based admin interface.
2. JSON Web Token Authentication: For programmatic access via the STAC API directly.

::: warning
Basic authentication and token authentication were removed in STAC API version `v1`.
:::

## Session Authentication

Users can browse geodata in the "admin interface", a web-based UI available to selected user.
Upon successful login, the service issues a session cookie that authenticates subsequent requests from the browser.

Session authentication is designed specifically for browser-based workflows and may not work with non-browser clients or all API endpoints.

## JSON Web Token Authentication

JWT authentication is the recommended approach for API clients performing write operations programmatically.

JWT authentication involves two steps:

1. Obtain a JWT token from Amazon Cognito's [InitiateAuth API](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html).
2. Include the tokes in the HTTP `Authorization` header using the `Bearer` scheme as defined in [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750#section-2.1).

To obtain a JWT token, use Amazon Cognito’s InitiateAuth API by sending your username and password, along with your client ID. For example:

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

Replace the values for `PASSWORD`, `USERNAME` and `ClientId` with your actual credentials.

The response from `InitiateAuth` is a JSON document containing the token under `AccessToken`.

::: tip No token in response
In some cases, the response may not include a token.
For example, this can happen if a password update or multi-factor authentication (MFA) is required.
AWS provides an [SDK](https://aws.amazon.com/developer/tools/) to simplify handling these situations
:::

::: tip Token expiration
The access token you receive is valid only for a limited time, as specified by the `AuthenticationResult.ExpiresIn` field. After it expires, your application must obtain a new token either by re-authenticating or by using the [refresh token](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-the-refresh-token.html), which is typically valid for a longer period.
:::

Once you have a valid JWT token (for example, `123456`), you can create a new asset by including the token in the Authorization header:

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
