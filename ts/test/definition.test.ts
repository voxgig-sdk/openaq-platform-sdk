import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "location",
    "accessor": "Location",
    "op": "list",
    "method": "GET",
    "path": "/locations",
    "args": [],
    "select": {
      "city": "v1",
      "coordinate": "v1",
      "country": "v1",
      "limit": 100,
      "location": "v1",
      "order_by": "v1",
      "page": 1,
      "parameter": "v1",
      "radius": "v1",
      "sort": "asc"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "page",
      "country",
      "city",
      "location",
      "parameter",
      "coordinates",
      "radius",
      "order_by",
      "sort"
    ],
    "queryArgs": [
      {
        "name": "city",
        "wire": "city"
      },
      {
        "name": "coordinate",
        "wire": "coordinates"
      },
      {
        "name": "country",
        "wire": "country"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "location",
        "wire": "location"
      },
      {
        "name": "order_by",
        "wire": "order_by"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "parameter",
        "wire": "parameter"
      },
      {
        "name": "radius",
        "wire": "radius"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "meta": {
        "name": "openaq-api",
        "license": "CC BY 4.0",
        "website": "https://docs.openaq.org/",
        "page": 1,
        "limit": 100,
        "found": 50000
      },
      "results": [
        {
          "id": 12345,
          "country": "US",
          "city": "Los Angeles",
          "location": "Downtown LA",
          "coordinates": {
            "latitude": 34.0522,
            "longitude": -118.2437
          },
          "isMobile": false,
          "isAnalysis": false,
          "parameters": [
            {
              "id": 1,
              "parameter": "pm25",
              "displayName": "PM2.5",
              "unit": "µg/m³",
              "count": 50000,
              "lastValue": 12.5,
              "firstUpdated": "2020-01-01T00:00:00Z",
              "lastUpdated": "2024-01-01T12:00:00Z"
            }
          ],
          "sources": [
            {
              "id": "x",
              "name": "x",
              "url": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "measurement",
    "accessor": "Measurement",
    "op": "list",
    "method": "GET",
    "path": "/measurements",
    "args": [],
    "select": {
      "city": "v1",
      "coordinate": "v1",
      "country": "v1",
      "date_from": "2024-01-01T00:00:00Z",
      "date_to": "2024-01-31T23:59:59Z",
      "limit": 100,
      "location": "v1",
      "location_id": "v1",
      "order_by": "datetime",
      "page": 1,
      "parameter": "v1",
      "radius": "v1",
      "sort": "desc",
      "value_from": "v1",
      "value_to": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "page",
      "country",
      "city",
      "location",
      "location_id",
      "parameter",
      "date_from",
      "date_to",
      "coordinates",
      "radius",
      "value_from",
      "value_to",
      "order_by",
      "sort"
    ],
    "queryArgs": [
      {
        "name": "city",
        "wire": "city"
      },
      {
        "name": "coordinate",
        "wire": "coordinates"
      },
      {
        "name": "country",
        "wire": "country"
      },
      {
        "name": "date_from",
        "wire": "date_from"
      },
      {
        "name": "date_to",
        "wire": "date_to"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "location",
        "wire": "location"
      },
      {
        "name": "location_id",
        "wire": "location_id"
      },
      {
        "name": "order_by",
        "wire": "order_by"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "parameter",
        "wire": "parameter"
      },
      {
        "name": "radius",
        "wire": "radius"
      },
      {
        "name": "sort",
        "wire": "sort"
      },
      {
        "name": "value_from",
        "wire": "value_from"
      },
      {
        "name": "value_to",
        "wire": "value_to"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "meta": {
        "name": "openaq-api",
        "license": "CC BY 4.0",
        "website": "https://docs.openaq.org/",
        "page": 1,
        "limit": 100,
        "found": 5000000
      },
      "results": [
        {
          "locationId": 12345,
          "location": "Downtown LA",
          "parameter": "pm25",
          "value": 12.5,
          "date": {
            "utc": "2024-01-01T12:00:00Z",
            "local": "2024-01-01T04:00:00-08:00"
          },
          "unit": "µg/m³",
          "coordinates": {
            "latitude": 34.0522,
            "longitude": -118.2437
          },
          "country": "US",
          "city": "Los Angeles",
          "isMobile": false,
          "isAnalysis": false,
          "entity": "governmental",
          "sensorType": "reference grade"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
