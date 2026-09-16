

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { OpenaqPlatformSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('LocationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENAQ_PLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENAQ_PLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenaqPlatformSDK.test()
    const ent = testsdk.Location()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENAQ_PLATFORM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'location.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"city","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"coordinates","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"name":"country","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"isAnalysis","req":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"name":"isMobile","req":false,"type":"`$BOOLEAN`","index$":5},{"active":true,"name":"location","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"parameters","req":false,"type":"`$ARRAY`","index$":7},{"active":true,"name":"sources","req":false,"type":"`$ARRAY`","index$":8}],"id":{"field":"id","name":"id"},"name":"location","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"city","orig":"city","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"coordinate","orig":"coordinate","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"country","orig":"country","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":100,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"location","orig":"location","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"order_by","orig":"order_by","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":6},{"active":true,"kind":"query","name":"parameter","orig":"parameter","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"kind":"query","name":"radius","orig":"radius","reqd":false,"type":"`$INTEGER`","index$":8},{"active":true,"example":"asc","kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":9}]},"contract":{"id":"GET /locations","json":"{\"operationId\":\"getLocations\",\"parameters\":[{\"description\":\"Number of results to return (max 1000)\",\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"default\":100,\"maximum\":1000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter by country code (ISO 3166-1 alpha-2)\",\"in\":\"query\",\"name\":\"country\",\"schema\":{\"pattern\":\"^[A-Z]{2}$\",\"type\":\"string\"}},{\"description\":\"Filter by city name\",\"in\":\"query\",\"name\":\"city\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by location name or ID\",\"in\":\"query\",\"name\":\"location\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by parameter (e.g., pm25, pm10, o3, no2, so2, co)\",\"in\":\"query\",\"name\":\"parameter\",\"schema\":{\"enum\":[\"pm25\",\"pm10\",\"o3\",\"no2\",\"so2\",\"co\",\"bc\"],\"type\":\"string\"}},{\"description\":\"Center point for radius search (latitude,longitude)\",\"in\":\"query\",\"name\":\"coordinates\",\"schema\":{\"pattern\":\"^-?\\\\d+\\\\.\\\\d+,-?\\\\d+\\\\.\\\\d+$\",\"type\":\"string\"}},{\"description\":\"Radius in meters for coordinate-based search (used with coordinates parameter)\",\"in\":\"query\",\"name\":\"radius\",\"schema\":{\"maximum\":100000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Field to order results by\",\"in\":\"query\",\"name\":\"order_by\",\"schema\":{\"enum\":[\"city\",\"country\",\"location\",\"firstUpdated\",\"lastUpdated\"],\"type\":\"string\"}},{\"description\":\"Sort order\",\"in\":\"query\",\"name\":\"sort\",\"schema\":{\"default\":\"asc\",\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"meta\":{\"properties\":{\"found\":{\"example\":50000,\"type\":\"integer\"},\"license\":{\"example\":\"CC BY 4.0\",\"type\":\"string\"},\"limit\":{\"example\":100,\"type\":\"integer\"},\"name\":{\"example\":\"openaq-api\",\"type\":\"string\"},\"page\":{\"example\":1,\"type\":\"integer\"},\"website\":{\"example\":\"https://docs.openaq.org/\",\"type\":\"string\"}},\"type\":\"object\"},\"results\":{\"items\":{\"properties\":{\"city\":{\"example\":\"Los Angeles\",\"type\":\"string\"},\"coordinates\":{\"properties\":{\"latitude\":{\"example\":34.0522,\"type\":\"number\"},\"longitude\":{\"example\":-118.2437,\"type\":\"number\"}},\"type\":\"object\"},\"country\":{\"example\":\"US\",\"type\":\"string\"},\"id\":{\"example\":12345,\"type\":\"integer\"},\"isAnalysis\":{\"example\":false,\"type\":\"boolean\"},\"isMobile\":{\"example\":false,\"type\":\"boolean\"},\"location\":{\"example\":\"Downtown LA\",\"type\":\"string\"},\"parameters\":{\"items\":{\"properties\":{\"count\":{\"example\":50000,\"type\":\"integer\"},\"displayName\":{\"example\":\"PM2.5\",\"type\":\"string\"},\"firstUpdated\":{\"example\":\"2020-01-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"type\":\"integer\"},\"lastUpdated\":{\"example\":\"2024-01-01T12:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"lastValue\":{\"example\":12.5,\"type\":\"number\"},\"parameter\":{\"example\":\"pm25\",\"type\":\"string\"},\"unit\":{\"example\":\"µg/m³\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"sources\":{\"items\":{\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of locations\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Bad Request\",\"type\":\"string\"},\"message\":{\"example\":\"Invalid parameter value\",\"type\":\"string\"},\"statusCode\":{\"example\":400,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Bad Request\",\"type\":\"string\"},\"message\":{\"example\":\"Invalid parameter value\",\"type\":\"string\"},\"statusCode\":{\"example\":400,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Bad Request\",\"type\":\"string\"},\"message\":{\"example\":\"Invalid parameter value\",\"type\":\"string\"},\"statusCode\":{\"example\":400,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/locations","segments":[{"lit":"locations"}],"select":{"exist":["city","coordinate","country","limit","location","order_by","page","parameter","radius","sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"location","name__orig":"location","Name":"Location","name_":"location","name-":"location","NAME":"LOCATION","index$":0}, {"active":true,"entity":"location","key$":"BasicLocationFlow","kind":"basic","name":"BasicLocationFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"location_ref01"}}],"index$":0}]}, 'Location')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let location_ref01_data = Object.values(setup.data.existing.location)[0] as any

    // LIST
    const location_ref01_ent = client.Location()
    const location_ref01_match: any = {}

    const location_ref01_list = (await location_ref01_ent.list(location_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/location/LocationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = OpenaqPlatformSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['location01','location02','location03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENAQ_PLATFORM_TEST_LOCATION_ENTID': idmap,
    'OPENAQ_PLATFORM_TEST_LIVE': 'FALSE',
    'OPENAQ_PLATFORM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['OPENAQ_PLATFORM_TEST_LOCATION_ENTID']

  const live = 'TRUE' === env.OPENAQ_PLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENAQ_PLATFORM_TEST_LOCATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new OpenaqPlatformSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.OPENAQ_PLATFORM_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
