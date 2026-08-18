-- OpenaqPlatform SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "OpenaqPlatform",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api.openaq.org/v2",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["location"] = {},
        ["measurement"] = {},
      },
    },
    entity = {
      ["location"] = {
        ["fields"] = {
          {
            ["name"] = "city",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "coordinates",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "country",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "isAnalysis",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "isMobile",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "location",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "parameters",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "sources",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "location",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "city",
                      ["orig"] = "city",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "coordinate",
                      ["orig"] = "coordinate",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "country",
                      ["orig"] = "country",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 100,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "location",
                      ["orig"] = "location",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "order_by",
                      ["orig"] = "order_by",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "parameter",
                      ["orig"] = "parameter",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "radius",
                      ["orig"] = "radius",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "asc",
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/locations",
                ["parts"] = {
                  "locations",
                },
                ["select"] = {
                  ["exist"] = {
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["measurement"] = {
        ["fields"] = {
          {
            ["name"] = "city",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "coordinates",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "country",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "date",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "entity",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "isAnalysis",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "isMobile",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "location",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "locationId",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "parameter",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sensorType",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "unit",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "value",
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "measurement",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "city",
                      ["orig"] = "city",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "coordinate",
                      ["orig"] = "coordinate",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "country",
                      ["orig"] = "country",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "2024-01-01T00:00:00Z",
                      ["kind"] = "query",
                      ["name"] = "date_from",
                      ["orig"] = "date_from",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "2024-01-31T23:59:59Z",
                      ["kind"] = "query",
                      ["name"] = "date_to",
                      ["orig"] = "date_to",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 100,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "location",
                      ["orig"] = "location",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "location_id",
                      ["orig"] = "location_id",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "datetime",
                      ["kind"] = "query",
                      ["name"] = "order_by",
                      ["orig"] = "order_by",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "parameter",
                      ["orig"] = "parameter",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "radius",
                      ["orig"] = "radius",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "desc",
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "value_from",
                      ["orig"] = "value_from",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "value_to",
                      ["orig"] = "value_to",
                      ["type"] = "`$NUMBER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/measurements",
                ["parts"] = {
                  "measurements",
                },
                ["select"] = {
                  ["exist"] = {
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
