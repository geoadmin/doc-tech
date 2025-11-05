# Get Layer Attributes

The endpoint returns attribute metadata for a specified layer. Use this endpoint if you want to list all available attributes of a layer or if you need details about a particular attribute. The endpoint is also useful for querying the [Find endpoint](/access-data/find-features).

<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/ech/MapServer/{layerBodId}" method="GET" />

## Request Details

To interact with the Layer Attributes service, you need to provide specific parameters in your request.
These parameters are divided into **Path Parameters**, which are required and part of the URL, and **Query Parameters**, which are optional and modify the behavior of the request.

### Path Parameters

| Parameters                | Description                         |
| ------------------------- | ----------------------------------- |
| **layerBodId (required)** | The technical name or the layer ID. |

### Query Parameters

| Parameters              | Description                                                                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **lang (optional)**     | The language. Supported values: `de`, `fr`, `it`, `rm`, `en`. (Defaults to `de` if browser language does not match any of the possible values) |
| **callback (optional)** | The name of the callback function.                                                                                                             |

## Response Details

The endpoint returns a **JSON** with information about attribute names and their metadata for a given layer. Each attribute is accompanied by metadata with its data type, an alias and example values.

Here is a description of the data contained in the response.

| **Field** | **Description**                    |
| --------- | ---------------------------------- |
| `id`      | The unique identifier of the layer |
| `name`    | The name of the layer              |

**Fields:** A list of objects, each representing an attribute of the layer. Each object contains:
| **Field** | **Description** |
| --------- | ---------------------------------- |
| `name` | The technical name of the attribute (e.g., `objektart`). |
| `type` | The data type of the attribute (e.g., `INTEGER`, `VARCHAR`, `FLOAT`). |
| `alias` | An identifier for the attribute. |
| `values` | A list of possible values for the attribute (if applicable). |

## Examples

Get all the attributes for layer `ch.swisstopo.swissboundaries3d-land-flaeche.fill`

<ExampleCodeBlock
request="curl https://api3.geo.admin.ch/rest/services/ech/MapServer/ch.swisstopo.swissboundaries3d-land-flaeche.fill"
example='{
  "id": "ch.swisstopo.swissboundaries3d-land-flaeche.fill",
  "name": "National boundaries",
  "fields": [
    {
      "name": "id",
      "type": "VARCHAR",
      "alias": "Abkürzung",
      "values": ["CH", "DE", "IT", "LI"]
    },
    {
      "name": "bez",
      "type": "VARCHAR",
      "alias": "ch.swisstopo.swissboundaries3d-land-flaeche.fill.bez",
      "values": ["Deutschland", "Italia", "Liechtenstein", "Schweiz"]
    },
    {
      "name": "displayname",
      "type": "VARCHAR",
      "alias": "ch.swisstopo.swissboundaries3d-land-flaeche.fill.displayname",
      "values": ["Deutschland 3", "Italia 4", "Liechtenstein 1", "Schweiz 2"]
    },
    {
      "name": "flaeche",
      "type": "NUMERIC",
      "alias": "ch.swisstopo.swissboundaries3d-land-flaeche.fill.flaeche",
      "values": [264, 763, 16048, 4129069]
    }
  ]
}'
/>

Get the same legend using JSONP:

```js
// Define the callback function to handle the response
function myCallbackFunction(data) {
  console.log(data)
  // Process the data as needed
}

// Dynamically create a script tag to make the JSONP request
function fetchLayerAttributes() {
  const script = document.createElement('script')
  const url =
    'https://api3.geo.admin.ch/rest/services/ech/MapServer/ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill'
  const callbackName = 'myCallbackFunction'
  script.src = `${url}?callback=${callbackName}`
  document.body.appendChild(script)
}

// Fetch the data when the page loads
window.onload = fetchLayerAttributes
```
