

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


describe('MeasurementEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPENAQ_PLATFORM_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPENAQ_PLATFORM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenaqPlatformSDK.test()
    const ent = testsdk.Measurement()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPENAQ_PLATFORM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'measurement.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"city","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"coordinates","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"name":"country","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"date","req":false,"type":"`$OBJECT`","index$":3},{"active":true,"name":"entity","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"isAnalysis","req":false,"type":"`$BOOLEAN`","index$":5},{"active":true,"name":"isMobile","req":false,"type":"`$BOOLEAN`","index$":6},{"active":true,"name":"location","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"locationId","req":false,"type":"`$INTEGER`","index$":8},{"active":true,"name":"parameter","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"sensorType","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"unit","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"value","req":false,"type":"`$NUMBER`","index$":12}],"name":"measurement","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"city","orig":"city","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"coordinate","orig":"coordinate","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"country","orig":"country","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"2024-01-01T00:00:00Z","kind":"query","name":"date_from","orig":"date_from","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"2024-01-31T23:59:59Z","kind":"query","name":"date_to","orig":"date_to","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":100,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":5},{"active":true,"kind":"query","name":"location","orig":"location","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"kind":"query","name":"location_id","orig":"location_id","reqd":false,"type":"`$INTEGER`","index$":7},{"active":true,"example":"datetime","kind":"query","name":"order_by","orig":"order_by","reqd":false,"type":"`$STRING`","index$":8},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":9},{"active":true,"kind":"query","name":"parameter","orig":"parameter","reqd":false,"type":"`$STRING`","index$":10},{"active":true,"kind":"query","name":"radius","orig":"radius","reqd":false,"type":"`$INTEGER`","index$":11},{"active":true,"example":"desc","kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":12},{"active":true,"kind":"query","name":"value_from","orig":"value_from","reqd":false,"type":"`$NUMBER`","index$":13},{"active":true,"kind":"query","name":"value_to","orig":"value_to","reqd":false,"type":"`$NUMBER`","index$":14}]},"contract":{"id":"GET /measurements","json":"{\"operationId\":\"getMeasurements\",\"parameters\":[{\"description\":\"Number of results to return (max 1000)\",\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"default\":100,\"maximum\":10000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter by country code (ISO 3166-1 alpha-2)\",\"in\":\"query\",\"name\":\"country\",\"schema\":{\"pattern\":\"^[A-Z]{2}$\",\"type\":\"string\"}},{\"description\":\"Filter by city name\",\"in\":\"query\",\"name\":\"city\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by location name or ID\",\"in\":\"query\",\"name\":\"location\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by location ID\",\"in\":\"query\",\"name\":\"location_id\",\"schema\":{\"type\":\"integer\"}},{\"description\":\"Filter by parameter (e.g., pm25, pm10, o3, no2, so2, co)\",\"in\":\"query\",\"name\":\"parameter\",\"schema\":{\"enum\":[\"pm25\",\"pm10\",\"o3\",\"no2\",\"so2\",\"co\",\"bc\"],\"type\":\"string\"}},{\"description\":\"Start date for measurements (ISO 8601 format)\",\"in\":\"query\",\"name\":\"date_from\",\"schema\":{\"example\":\"2024-01-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"End date for measurements (ISO 8601 format)\",\"in\":\"query\",\"name\":\"date_to\",\"schema\":{\"example\":\"2024-01-31T23:59:59Z\",\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Center point for radius search (latitude,longitude)\",\"in\":\"query\",\"name\":\"coordinates\",\"schema\":{\"pattern\":\"^-?\\\\d+\\\\.\\\\d+,-?\\\\d+\\\\.\\\\d+$\",\"type\":\"string\"}},{\"description\":\"Radius in meters for coordinate-based search\",\"in\":\"query\",\"name\":\"radius\",\"schema\":{\"maximum\":100000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Minimum measurement value\",\"in\":\"query\",\"name\":\"value_from\",\"schema\":{\"type\":\"number\"}},{\"description\":\"Maximum measurement value\",\"in\":\"query\",\"name\":\"value_to\",\"schema\":{\"type\":\"number\"}},{\"description\":\"Field to order results by\",\"in\":\"query\",\"name\":\"order_by\",\"schema\":{\"default\":\"datetime\",\"enum\":[\"city\",\"country\",\"location\",\"datetime\"],\"type\":\"string\"}},{\"description\":\"Sort order\",\"in\":\"query\",\"name\":\"sort\",\"schema\":{\"default\":\"desc\",\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"meta\":{\"properties\":{\"found\":{\"example\":5000000,\"type\":\"integer\"},\"license\":{\"example\":\"CC BY 4.0\",\"type\":\"string\"},\"limit\":{\"example\":100,\"type\":\"integer\"},\"name\":{\"example\":\"openaq-api\",\"type\":\"string\"},\"page\":{\"example\":1,\"type\":\"integer\"},\"website\":{\"example\":\"https://docs.openaq.org/\",\"type\":\"string\"}},\"type\":\"object\"},\"results\":{\"items\":{\"properties\":{\"city\":{\"example\":\"Los Angeles\",\"type\":\"string\"},\"coordinates\":{\"properties\":{\"latitude\":{\"example\":34.0522,\"type\":\"number\"},\"longitude\":{\"example\":-118.2437,\"type\":\"number\"}},\"type\":\"object\"},\"country\":{\"example\":\"US\",\"type\":\"string\"},\"date\":{\"properties\":{\"local\":{\"example\":\"2024-01-01T04:00:00-08:00\",\"format\":\"date-time\",\"type\":\"string\"},\"utc\":{\"example\":\"2024-01-01T12:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"entity\":{\"example\":\"governmental\",\"type\":\"string\"},\"isAnalysis\":{\"example\":false,\"type\":\"boolean\"},\"isMobile\":{\"example\":false,\"type\":\"boolean\"},\"location\":{\"example\":\"Downtown LA\",\"type\":\"string\"},\"locationId\":{\"example\":12345,\"type\":\"integer\"},\"parameter\":{\"example\":\"pm25\",\"type\":\"string\"},\"sensorType\":{\"example\":\"reference grade\",\"type\":\"string\"},\"unit\":{\"example\":\"µg/m³\",\"type\":\"string\"},\"value\":{\"example\":12.5,\"type\":\"number\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with measurement data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Bad Request\",\"type\":\"string\"},\"message\":{\"example\":\"Invalid parameter value\",\"type\":\"string\"},\"statusCode\":{\"example\":400,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Bad Request\",\"type\":\"string\"},\"message\":{\"example\":\"Invalid parameter value\",\"type\":\"string\"},\"statusCode\":{\"example\":400,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Bad Request\",\"type\":\"string\"},\"message\":{\"example\":\"Invalid parameter value\",\"type\":\"string\"},\"statusCode\":{\"example\":400,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/measurements","segments":[{"lit":"measurements"}],"select":{"exist":["city","coordinate","country","date_from","date_to","limit","location","location_id","order_by","page","parameter","radius","sort","value_from","value_to"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"measurement","name__orig":"measurement","Name":"Measurement","name_":"measurement","name-":"measurement","NAME":"MEASUREMENT","index$":1}, {"active":true,"entity":"measurement","key$":"BasicMeasurementFlow","kind":"basic","name":"BasicMeasurementFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"measurement_ref01"}}],"index$":0}]}, 'Measurement')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let measurement_ref01_data = Object.values(setup.data.existing.measurement)[0] as any

    // LIST
    const measurement_ref01_ent = client.Measurement()
    const measurement_ref01_match: any = {}

    const measurement_ref01_list = (await measurement_ref01_ent.list(measurement_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/measurement/MeasurementTestData.json')

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
    ['measurement01','measurement02','measurement03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPENAQ_PLATFORM_TEST_MEASUREMENT_ENTID': idmap,
    'OPENAQ_PLATFORM_TEST_LIVE': 'FALSE',
    'OPENAQ_PLATFORM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['OPENAQ_PLATFORM_TEST_MEASUREMENT_ENTID']

  const live = 'TRUE' === env.OPENAQ_PLATFORM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPENAQ_PLATFORM_TEST_MEASUREMENT_ENTID']
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
  
