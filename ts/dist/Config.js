"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'OpenaqPlatform',
        slug: "openaq-platform",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api.openaq.org/v2",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            location: {},
            measurement: {},
        }
    };
    entity = {
        "location": {
            "fields": [
                {
                    "name": "city",
                    "title": "City",
                    "type": "`$STRING`"
                },
                {
                    "name": "coordinates",
                    "title": "Coordinates",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "country",
                    "title": "Country",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "isAnalysis",
                    "title": "Is Analysis",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "isMobile",
                    "title": "Is Mobile",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "location",
                    "title": "Location",
                    "type": "`$STRING`"
                },
                {
                    "name": "parameters",
                    "title": "Parameters",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "sources",
                    "title": "Sources",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "location",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/locations",
                            "segments": [
                                {
                                    "lit": "locations"
                                }
                            ],
                            "parts": [
                                "locations"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "city",
                                        "orig": "city",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "coordinate",
                                        "orig": "coordinate",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "country",
                                        "orig": "country",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 100
                                    },
                                    {
                                        "name": "location",
                                        "orig": "location",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "order_by",
                                        "orig": "order_by",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "parameter",
                                        "orig": "parameter",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "radius",
                                        "orig": "radius",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "asc"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "city",
                                    "coordinate",
                                    "country",
                                    "limit",
                                    "location",
                                    "order_by",
                                    "page",
                                    "parameter",
                                    "radius",
                                    "sort"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "measurement": {
            "fields": [
                {
                    "name": "city",
                    "title": "City",
                    "type": "`$STRING`"
                },
                {
                    "name": "coordinates",
                    "title": "Coordinates",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "country",
                    "title": "Country",
                    "type": "`$STRING`"
                },
                {
                    "name": "date",
                    "title": "Date",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "entity",
                    "title": "Entity",
                    "type": "`$STRING`"
                },
                {
                    "name": "isAnalysis",
                    "title": "Is Analysis",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "isMobile",
                    "title": "Is Mobile",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "location",
                    "title": "Location",
                    "type": "`$STRING`"
                },
                {
                    "name": "locationId",
                    "title": "Location Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "parameter",
                    "title": "Parameter",
                    "type": "`$STRING`"
                },
                {
                    "name": "sensorType",
                    "title": "Sensor Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "unit",
                    "title": "Unit",
                    "type": "`$STRING`"
                },
                {
                    "name": "value",
                    "title": "Value",
                    "type": "`$NUMBER`"
                }
            ],
            "name": "measurement",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/measurements",
                            "segments": [
                                {
                                    "lit": "measurements"
                                }
                            ],
                            "parts": [
                                "measurements"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "city",
                                        "orig": "city",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "coordinate",
                                        "orig": "coordinate",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "country",
                                        "orig": "country",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "date_from",
                                        "orig": "date_from",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2024-01-01T00:00:00Z"
                                    },
                                    {
                                        "name": "date_to",
                                        "orig": "date_to",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2024-01-31T23:59:59Z"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 100
                                    },
                                    {
                                        "name": "location",
                                        "orig": "location",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "location_id",
                                        "orig": "location_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "order_by",
                                        "orig": "order_by",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "datetime"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "parameter",
                                        "orig": "parameter",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "radius",
                                        "orig": "radius",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "desc"
                                    },
                                    {
                                        "name": "value_from",
                                        "orig": "value_from",
                                        "type": "`$NUMBER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "value_to",
                                        "orig": "value_to",
                                        "type": "`$NUMBER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "city",
                                    "coordinate",
                                    "country",
                                    "date_from",
                                    "date_to",
                                    "limit",
                                    "location",
                                    "location_id",
                                    "order_by",
                                    "page",
                                    "parameter",
                                    "radius",
                                    "sort",
                                    "value_from",
                                    "value_to"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map