"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
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
            "limit": "v1",
            "location": "v1",
            "order_by": "v1",
            "page": "v1",
            "parameter": "v1",
            "radius": "v1",
            "sort": "v1"
        },
        "headers": [],
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
        "auth": null,
        "status": 200,
        "sample": {
            "meta": {
                "found": 50000,
                "license": "CC BY 4.0",
                "limit": 100,
                "name": "openaq-api",
                "page": 1,
                "website": "https://docs.openaq.org/"
            },
            "results": [
                {
                    "city": "Los Angeles",
                    "coordinates": {
                        "latitude": 34.0522,
                        "longitude": -118.2437
                    },
                    "country": "US",
                    "id": 12345,
                    "isAnalysis": false,
                    "isMobile": false,
                    "location": "Downtown LA",
                    "parameters": [
                        {
                            "count": 50000,
                            "displayName": "PM2.5",
                            "firstUpdated": "2020-01-01T00:00:00Z",
                            "id": 1,
                            "lastUpdated": "2024-01-01T12:00:00Z",
                            "lastValue": 12.5,
                            "parameter": "pm25",
                            "unit": "µg/m³"
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
            "limit": "v1",
            "location": "v1",
            "location_id": "v1",
            "order_by": "v1",
            "page": "v1",
            "parameter": "v1",
            "radius": "v1",
            "sort": "v1",
            "value_from": "v1",
            "value_to": "v1"
        },
        "headers": [],
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
        "auth": null,
        "status": 200,
        "sample": {
            "meta": {
                "found": 5000000,
                "license": "CC BY 4.0",
                "limit": 100,
                "name": "openaq-api",
                "page": 1,
                "website": "https://docs.openaq.org/"
            },
            "results": [
                {
                    "city": "Los Angeles",
                    "coordinates": {
                        "latitude": 34.0522,
                        "longitude": -118.2437
                    },
                    "country": "US",
                    "date": {
                        "local": "2024-01-01T04:00:00-08:00",
                        "utc": "2024-01-01T12:00:00Z"
                    },
                    "entity": "governmental",
                    "isAnalysis": false,
                    "isMobile": false,
                    "location": "Downtown LA",
                    "locationId": 12345,
                    "parameter": "pm25",
                    "sensorType": "reference grade",
                    "unit": "µg/m³",
                    "value": 12.5
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map