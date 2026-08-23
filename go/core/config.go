package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "OpenaqPlatform",
			"slug": "openaq-platform",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api.openaq.org/v2",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"location": map[string]any{},
				"measurement": map[string]any{},
			},
		},
		"entity": map[string]any{
			"location": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "city",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "coordinates",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "country",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "isAnalysis",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isMobile",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parameters",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sources",
						"type": "`$ARRAY`",
					},
				},
				"name": "location",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "city",
											"orig": "city",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "coordinate",
											"orig": "coordinate",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "location",
											"orig": "location",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "parameter",
											"orig": "parameter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "radius",
											"orig": "radius",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "asc",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/locations",
								"parts": []any{
									"locations",
								},
								"select": map[string]any{
									"exist": []any{
										"city",
										"coordinate",
										"country",
										"limit",
										"location",
										"order_by",
										"page",
										"parameter",
										"radius",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"measurement": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "city",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "coordinates",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "country",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "entity",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isAnalysis",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isMobile",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locationId",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "parameter",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sensorType",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"type": "`$NUMBER`",
					},
				},
				"name": "measurement",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "city",
											"orig": "city",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "coordinate",
											"orig": "coordinate",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2024-01-01T00:00:00Z",
											"kind": "query",
											"name": "date_from",
											"orig": "date_from",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2024-01-31T23:59:59Z",
											"kind": "query",
											"name": "date_to",
											"orig": "date_to",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "location",
											"orig": "location",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "location_id",
											"orig": "location_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "datetime",
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "parameter",
											"orig": "parameter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "radius",
											"orig": "radius",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "desc",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "value_from",
											"orig": "value_from",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "value_to",
											"orig": "value_to",
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/measurements",
								"parts": []any{
									"measurements",
								},
								"select": map[string]any{
									"exist": []any{
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
										"value_to",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
