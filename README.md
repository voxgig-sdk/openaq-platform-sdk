# OpenaqPlatform SDK

Global open-source air quality data aggregated from sensors and reference monitors worldwide

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About OpenAQ Platform

[OpenAQ](https://openaq.org) is a non-profit organisation that aggregates open air quality measurements from government monitoring networks, research-grade reference monitors, and low-cost sensor networks into a single public dataset. The API surfaces that aggregated dataset so anyone can query air quality by location, pollutant, or time range.

What you get from the API:
- Monitoring **locations** worldwide, with coordinates, country/city metadata, and the parameters each location reports.
- **Measurements** of pollutants such as PM2.5, PM10, O3, NO2, SO2, CO, and BC, with their values, units, and timestamps.
- Filtering by bounding box, radius/coordinates, date range, source, and parameter.

**Important version note:** this SDK targets the `/v2` server URL, but OpenAQ retired the v1 and v2 endpoints on 31 January 2025 — requests to `/v1` and `/v2` now return HTTP 410 Gone. New integrations should use the [v3 API](https://docs.openaq.org/) at `https://api.openaq.org/v3`.

Operational notes: the v3 API requires an [API key](https://docs.openaq.org/using-the-api/api-key) passed on every request; unauthorised requests are rejected. Bulk historical data is also available via the [OpenAQ Open Data on AWS S3 bucket](https://docs.openaq.org/).

## Try it

**TypeScript**
```bash
npm install openaq-platform
```

**Python**
```bash
pip install openaq-platform-sdk
```

**PHP**
```bash
composer require voxgig/openaq-platform-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/openaq-platform-sdk/go
```

**Ruby**
```bash
gem install openaq-platform-sdk
```

**Lua**
```bash
luarocks install openaq-platform-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { OpenaqPlatformSDK } from 'openaq-platform'

const client = new OpenaqPlatformSDK({})

// List all locations
const locations = await client.Location().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o openaq-platform-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "openaq-platform": {
      "command": "/abs/path/to/openaq-platform-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Location** | A monitoring site reporting air quality data, with coordinates, country, and the list of pollutants it measures — exposed under `/v2/locations` (and `/v2/locations/{id}` for a single site). | `/locations` |
| **Measurement** | An individual pollutant reading (value, unit, timestamp, parameter) from a monitoring location — exposed under `/v2/measurements`. | `/measurements` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from openaqplatform_sdk import OpenaqPlatformSDK

client = OpenaqPlatformSDK({})

# List all locations
locations, err = client.Location(None).list(None, None)
```

### PHP

```php
<?php
require_once 'openaqplatform_sdk.php';

$client = new OpenaqPlatformSDK([]);

// List all locations
[$locations, $err] = $client->Location(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/openaq-platform-sdk/go"

client := sdk.NewOpenaqPlatformSDK(map[string]any{})

// List all locations
locations, err := client.Location(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "OpenaqPlatform_sdk"

client = OpenaqPlatformSDK.new({})

# List all locations
locations, err = client.Location(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("openaq-platform_sdk")

local client = sdk.new({})

-- List all locations
local locations, err = client:Location(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = OpenaqPlatformSDK.test()
const result = await client.Location().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = OpenaqPlatformSDK.test(None, None)
result, err = client.Location(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = OpenaqPlatformSDK::test(null, null);
[$result, $err] = $client->Location(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Location(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = OpenaqPlatformSDK.test(nil, nil)
result, err = client.Location(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Location(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the OpenAQ Platform

- Upstream: [https://openaq.org](https://openaq.org)
- API docs: [https://docs.openaq.org/](https://docs.openaq.org/)

- Data is published under the Creative Commons Attribution 4.0 International (CC BY 4.0) licence.
- Attribution to OpenAQ and the original upstream data providers is required when redistributing or visualising the data.
- Review the [OpenAQ Terms of Use](https://docs.openaq.org/) for rules on allowable use, intellectual property, and third-party data compliance.

---

Generated from the OpenAQ Platform OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
