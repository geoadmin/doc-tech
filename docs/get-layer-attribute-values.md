# Get Layer Attribute Values

The attribute values endpoint provides a preview of possible values for a specific attribute (field) of a given vector layer. This is useful for building filter UIs, dropdowns, or for understanding the data distribution in a layer. This endpoint can be used to get more detailed information about possible attribute values.

<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}/attributes/{attributeName}" method="GET" />

## Request Details

To interact with the Layer Attribute Values service, you need to provide specific parameters in your request.
This endpoint only has **Path Parameters** which are mandatory.

### Path Parameters

| Parameters                      | Description                                                       |
| ------------------------------- | ----------------------------------------------------------------- |
| **layerBodId (required)**       | The technical name or the layer ID.                              |
| **attributeName (required)**    | The name of the attribute for which to retrieve values.          |

## Response Details

The endpoint returns a **JSON** with information about the attribute values for the specified layer and attribute. The response includes an array of values. For attributes of type `DATE`, `INTEGER`, `NUMERIC` the endpoint returns the minimum and maximum values as a two-element array. For other attribute types the endpoint returns up to 50 distinct values, sorted.

Here is a description of the data contained in the response.

| **Field**        | **Description**                                                      |
| ---------------- | -------------------------------------------------------------------- |
| `values`         | Array of attribute values                                            |

## Examples

Get distinct values for the `egid` attribute from layer `ch.bfs.gebaeude_wohnungs_register`:

<ExampleCodeBlock 
request='curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bfs.gebaeude_wohnungs_register/attributes/egid'
example='{
    "values": [
        "1",
        "10",
        "100",
        "10000",
        "1000001",
        "1000002",
        "1000007",
        "1000008",
        "1000009",
        "100001",
        "1000011",
        "1000012",
        "1000013",
        "1000014",
        "1000015",
        "1000016",
        "1000017",
        "1000018",
        "1000019",
        "100002",
        "1000020",
        "1000021",
        "1000022",
        "1000024",
        "1000026",
        "1000027",
        "1000028",
        "1000029",
        "100003",
        "1000030",
        "1000031",
        "1000032",
        "1000033",
        "1000034",
        "1000035",
        "1000036",
        "1000038",
        "1000039",
        "1000040",
        "1000041",
        "1000042",
        "1000043",
        "1000044",
        "1000045",
        "1000046",
        "1000047",
        "1000048",
        "1000049",
        "100005",
        "1000050"
    ]
}'
/>

<br>

Get the min and max value for the `garea` attribute from layer `ch.bfs.gebaeude_wohnungs_register` with descending order:

<ExampleCodeBlock 
request='curl "https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bfs.gebaeude_wohnungs_register/attributes/garea"'
example='{
    "values": [
        1,
        99431
    ]
}'
/>
