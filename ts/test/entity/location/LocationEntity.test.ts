

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"city":{"a":true,"h":"City","n":"city","r":false,"t":"`$STRING`","key$":"city","index$":0},"coordinates":{"a":true,"h":"Coordinates","n":"coordinates","r":false,"t":"`$OBJECT`","key$":"coordinates","index$":1},"country":{"a":true,"h":"Country","n":"country","r":false,"t":"`$STRING`","key$":"country","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":3},"isAnalysis":{"a":true,"h":"Is Analysis","n":"isAnalysis","r":false,"t":"`$BOOLEAN`","key$":"isAnalysis","index$":4},"isMobile":{"a":true,"h":"Is Mobile","n":"isMobile","r":false,"t":"`$BOOLEAN`","key$":"isMobile","index$":5},"location":{"a":true,"h":"Location","n":"location","r":false,"t":"`$STRING`","key$":"location","index$":6},"parameters":{"a":true,"h":"Parameters","n":"parameters","r":false,"t":"`$ARRAY`","key$":"parameters","index$":7},"sources":{"a":true,"h":"Sources","n":"sources","r":false,"t":"`$ARRAY`","key$":"sources","index$":8}},"id":{"field":"id","name":"id"},"name":"location","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /locations","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"city","or":"city","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"coordinate","or":"coordinate","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"country","or":"country","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":100,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"location","or":"location","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"k":"query","n":"parameter","or":"parameter","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"radius","or":"radius","r":false,"t":"`$INTEGER`","index$":8},{"a":true,"ex":"asc","k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":9}]},"k":"http","m":"GET","o":"/locations","q":{"exist":["city","coordinate","country","limit","location","order_by","page","parameter","radius","sort"]},"r":{},"s":[{"lit":"locations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"location","name__orig":"location","Name":"Location","name_":"location","name-":"location","NAME":"LOCATION","index$":0}, {"active":true,"entity":"location","key$":"BasicLocationFlow","kind":"basic","name":"BasicLocationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"location_ref01"}}],"index$":0}]}, 'Location', {"GET /locations":{"protocol":"http","operationId":"getLocations","responses":{"200":{"description":"Successful response with list of locations","content":{"application/json":{"schema":{"type":"object","properties":{"meta":{"key$":"meta","properties":{"found":{"example":50000,"type":"integer"},"license":{"example":"CC BY 4.0","type":"string"},"limit":{"example":100,"type":"integer"},"name":{"example":"openaq-api","type":"string"},"page":{"example":1,"type":"integer"},"website":{"example":"https://docs.openaq.org/","type":"string"}},"type":"object"},"results":{"items":{"properties":{"city":{"example":"Los Angeles","type":"string","key$":"city"},"coordinates":{"properties":{"latitude":{"example":34.0522,"type":"number"},"longitude":{"example":-118.2437,"type":"number"}},"type":"object","key$":"coordinates"},"country":{"example":"US","type":"string","key$":"country"},"id":{"example":12345,"type":"integer","key$":"id"},"isAnalysis":{"example":false,"type":"boolean","key$":"isAnalysis"},"isMobile":{"example":false,"type":"boolean","key$":"isMobile"},"location":{"example":"Downtown LA","type":"string","key$":"location"},"parameters":{"items":{"properties":{"count":{"example":50000,"type":"integer"},"displayName":{"example":"PM2.5","type":"string"},"firstUpdated":{"example":"2020-01-01T00:00:00Z","format":"date-time","type":"string"},"id":{"type":"integer"},"lastUpdated":{"example":"2024-01-01T12:00:00Z","format":"date-time","type":"string"},"lastValue":{"example":12.5,"type":"number"},"parameter":{"example":"pm25","type":"string"},"unit":{"example":"µg/m³","type":"string"}},"type":"object"},"type":"array","key$":"parameters"},"sources":{"items":{"properties":{"id":{"type":"string"},"name":{"type":"string"},"url":{"type":"string"}},"type":"object"},"type":"array","key$":"sources"}},"type":"object","index$":0},"key$":"results","type":"array"}}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"statusCode":{"type":"integer","example":400},"error":{"type":"string","example":"Bad Request"},"message":{"type":"string","example":"Invalid parameter value"}},"x-ref":"#/components/schemas/Error"}}}},"429":{"description":"Rate limit exceeded","content":{"application/json":{"schema":{"type":"object","properties":{"statusCode":{"type":"integer","example":400},"error":{"type":"string","example":"Bad Request"},"message":{"type":"string","example":"Invalid parameter value"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"statusCode":{"type":"integer","example":400},"error":{"type":"string","example":"Bad Request"},"message":{"type":"string","example":"Invalid parameter value"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"limit","in":"query","description":"Number of results to return (max 1000)","schema":{"type":"integer","default":100,"minimum":1,"maximum":1000},"index$":0},{"name":"page","in":"query","description":"Page number for pagination","schema":{"type":"integer","default":1,"minimum":1},"index$":1},{"name":"country","in":"query","description":"Filter by country code (ISO 3166-1 alpha-2)","schema":{"type":"string","pattern":"^[A-Z]{2}$"},"index$":2},{"name":"city","in":"query","description":"Filter by city name","schema":{"type":"string"},"index$":3},{"name":"location","in":"query","description":"Filter by location name or ID","schema":{"type":"string"},"index$":4},{"name":"parameter","in":"query","description":"Filter by parameter (e.g., pm25, pm10, o3, no2, so2, co)","schema":{"type":"string","enum":["pm25","pm10","o3","no2","so2","co","bc"]},"index$":5},{"name":"coordinates","in":"query","description":"Center point for radius search (latitude,longitude)","schema":{"type":"string","pattern":"^-?\\d+\\.\\d+,-?\\d+\\.\\d+$"},"index$":6},{"name":"radius","in":"query","description":"Radius in meters for coordinate-based search (used with coordinates parameter)","schema":{"type":"integer","minimum":1,"maximum":100000},"index$":7},{"name":"order_by","in":"query","description":"Field to order results by","schema":{"type":"string","enum":["city","country","location","firstUpdated","lastUpdated"]},"index$":8},{"name":"sort","in":"query","description":"Sort order","schema":{"type":"string","enum":["asc","desc"],"default":"asc"},"index$":9}],"securitySource":"unspecified"}})
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
  
