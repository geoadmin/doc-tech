# Layer Attributes

This service is used to expose the attributes names that are specific to
a layer. This is particularly useful when working with the **Find Service** or when you need detailed information about the fields available in a layer.

```sh
https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}
```

## Request Parameters

RESTFul interface is available.

| Parameters                | Description                                                                                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **layerBodId (required)** | The technical name or BOD ID.                                                                                                                  |
| **lang (optional)**       | The language. Supported values: `de`, `fr`, `it`, `rm`, `en`. (Defaults to `de` if browser language does not match any of the possible values) |
| **callback (optional)**   | The name of the callback function.                                                                                                             |

## Response Format

::: details Response example

```JSON
{
  "id": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill",
  "name": "Municipal boundaries",
  "fields": [
    {
      "name": "objektart",
      "type": "INTEGER",
      "alias": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill.objektart",
      "values": [0, 11, 12]
    },
    {
      "name": "link_de",
      "type": "VARCHAR",
      "alias": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill.link_de",
      "values": [
        "https://www.agvchapp.bfs.admin.ch/de/communes/results?BfsNr=1&EntriesFrom=12.09.1848&EntriesTo=14.11.1976&IncludeUnassignedEntities=True",
        "https://www.agvchapp.bfs.admin.ch/de/communes/results?BfsNr=2&EntriesFrom=12.09.1848&EntriesTo=01.01.2023&IncludeUnassignedEntities=True"
      ]
    },
    {
      "name": "perimeter",
      "type": "FLOAT",
      "alias": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill.perimeter",
      "values": [14587.478508754233, 15685.832546628937]
    }
  ]
}
```

:::
A request to the Layers Attributes service returns a `JSON` with information about attribute names and their metadata for a given layer. The `field` attribute lists the data types, aliases and possible values for each attribute.

Here is a description of the data contained in the response.

| **Field**  | **Description**                                                                       |
| ---------- | ------------------------------------------------------------------------------------- |
| `id`       | The unique identifier of the layer                                                    |
| `name`     | The name of the layer                                                                 |
| **fields** | A list of objects, each representing an attribute of the layer. Each object contains: |
| `name`     | The technical name of the attribute (e.g., `objektart`).                              |
| `type`     | The data type of the attribute (e.g., `INTEGER`, `VARCHAR`, `FLOAT`).                 |
| `alias`    | An identifier for the attribute.                                                      |
| `values`   | A list of possible values for the attribute (if applicable).                          |

## Examples

Get the all the available attributes names of the municipal boundaries:

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill
```
