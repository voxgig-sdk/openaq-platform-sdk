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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "City",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "coordinates",
						"title": "Coordinates",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "isAnalysis",
						"title": "Is Analysis",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isMobile",
						"title": "Is Mobile",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "location",
						"title": "Location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parameters",
						"title": "Parameters",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sources",
						"title": "Sources",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "location",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/locations",
								"segments": []any{
									map[string]any{
										"lit": "locations",
									},
								},
								"parts": []any{
									"locations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "city",
											"orig": "city",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "coordinate",
											"orig": "coordinate",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "location",
											"orig": "location",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "parameter",
											"orig": "parameter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "radius",
											"orig": "radius",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
											"example": "asc",
										},
									},
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
						"title": "City",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "coordinates",
						"title": "Coordinates",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "entity",
						"title": "Entity",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isAnalysis",
						"title": "Is Analysis",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isMobile",
						"title": "Is Mobile",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "location",
						"title": "Location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locationId",
						"title": "Location Id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "parameter",
						"title": "Parameter",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sensorType",
						"title": "Sensor Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unit",
						"title": "Unit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
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
								"kind": "http",
								"method": "GET",
								"orig": "/measurements",
								"segments": []any{
									map[string]any{
										"lit": "measurements",
									},
								},
								"parts": []any{
									"measurements",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "city",
											"orig": "city",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "coordinate",
											"orig": "coordinate",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "date_from",
											"orig": "date_from",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2024-01-01T00:00:00Z",
										},
										map[string]any{
											"name": "date_to",
											"orig": "date_to",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2024-01-31T23:59:59Z",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "location",
											"orig": "location",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "location_id",
											"orig": "location_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "datetime",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "parameter",
											"orig": "parameter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "radius",
											"orig": "radius",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "value_from",
											"orig": "value_from",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "value_to",
											"orig": "value_to",
											"type": "`$NUMBER`",
											"kind": "query",
										},
									},
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
