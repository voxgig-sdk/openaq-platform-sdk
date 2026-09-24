"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('MeasurementEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPENAQ_PLATFORM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPENAQ_PLATFORM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenaqPlatformSDK.test();
        const ent = testsdk.Measurement();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPENAQ_PLATFORM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'measurement.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "city": { "a": true, "h": "City", "n": "city", "r": false, "t": "`$STRING`", "key$": "city", "index$": 0 }, "coordinates": { "a": true, "h": "Coordinates", "n": "coordinates", "r": false, "t": "`$OBJECT`", "key$": "coordinates", "index$": 1 }, "country": { "a": true, "h": "Country", "n": "country", "r": false, "t": "`$STRING`", "key$": "country", "index$": 2 }, "date": { "a": true, "h": "Date", "n": "date", "r": false, "t": "`$OBJECT`", "key$": "date", "index$": 3 }, "entity": { "a": true, "h": "Entity", "n": "entity", "r": false, "t": "`$STRING`", "key$": "entity", "index$": 4 }, "isAnalysis": { "a": true, "h": "Is Analysis", "n": "isAnalysis", "r": false, "t": "`$BOOLEAN`", "key$": "isAnalysis", "index$": 5 }, "isMobile": { "a": true, "h": "Is Mobile", "n": "isMobile", "r": false, "t": "`$BOOLEAN`", "key$": "isMobile", "index$": 6 }, "location": { "a": true, "h": "Location", "n": "location", "r": false, "t": "`$STRING`", "key$": "location", "index$": 7 }, "locationId": { "a": true, "h": "Location Id", "n": "locationId", "r": false, "t": "`$INTEGER`", "key$": "locationId", "index$": 8 }, "parameter": { "a": true, "h": "Parameter", "n": "parameter", "r": false, "t": "`$STRING`", "key$": "parameter", "index$": 9 }, "sensorType": { "a": true, "h": "Sensor Type", "n": "sensorType", "r": false, "t": "`$STRING`", "key$": "sensorType", "index$": 10 }, "unit": { "a": true, "h": "Unit", "n": "unit", "r": false, "t": "`$STRING`", "key$": "unit", "index$": 11 }, "value": { "a": true, "h": "Value", "n": "value", "r": false, "t": "`$NUMBER`", "key$": "value", "index$": 12 } }, "name": "measurement", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /measurements", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "city", "or": "city", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "coordinate", "or": "coordinate", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "country", "or": "country", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "2024-01-01T00:00:00Z", "k": "query", "n": "date_from", "or": "date_from", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "2024-01-31T23:59:59Z", "k": "query", "n": "date_to", "or": "date_to", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": 100, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "k": "query", "n": "location", "or": "location", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "location_id", "or": "location_id", "r": false, "t": "`$INTEGER`", "index$": 7 }, { "a": true, "ex": "datetime", "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 9 }, { "a": true, "k": "query", "n": "parameter", "or": "parameter", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "k": "query", "n": "radius", "or": "radius", "r": false, "t": "`$INTEGER`", "index$": 11 }, { "a": true, "ex": "desc", "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 12 }, { "a": true, "k": "query", "n": "value_from", "or": "value_from", "r": false, "t": "`$NUMBER`", "index$": 13 }, { "a": true, "k": "query", "n": "value_to", "or": "value_to", "r": false, "t": "`$NUMBER`", "index$": 14 }] }, "k": "http", "m": "GET", "o": "/measurements", "q": { "exist": ["city", "coordinate", "country", "date_from", "date_to", "limit", "location", "location_id", "order_by", "page", "parameter", "radius", "sort", "value_from", "value_to"] }, "r": {}, "s": [{ "lit": "measurements" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "measurement", "name__orig": "measurement", "Name": "Measurement", "name_": "measurement", "name-": "measurement", "NAME": "MEASUREMENT", "index$": 1 }, { "active": true, "entity": "measurement", "key$": "BasicMeasurementFlow", "kind": "basic", "name": "BasicMeasurementFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "measurement_ref01" } }], "index$": 0 }] }, 'Measurement', { "GET /measurements": { "protocol": "http", "operationId": "getMeasurements", "responses": { "200": { "description": "Successful response with measurement data", "content": { "application/json": { "schema": { "type": "object", "properties": { "meta": { "key$": "meta", "properties": { "found": { "example": 5000000, "type": "integer" }, "license": { "example": "CC BY 4.0", "type": "string" }, "limit": { "example": 100, "type": "integer" }, "name": { "example": "openaq-api", "type": "string" }, "page": { "example": 1, "type": "integer" }, "website": { "example": "https://docs.openaq.org/", "type": "string" } }, "type": "object" }, "results": { "items": { "properties": { "city": { "example": "Los Angeles", "type": "string", "key$": "city" }, "coordinates": { "properties": { "latitude": { "example": 34.0522, "type": "number" }, "longitude": { "example": -118.2437, "type": "number" } }, "type": "object", "key$": "coordinates" }, "country": { "example": "US", "type": "string", "key$": "country" }, "date": { "properties": { "local": { "example": "2024-01-01T04:00:00-08:00", "format": "date-time", "type": "string" }, "utc": { "example": "2024-01-01T12:00:00Z", "format": "date-time", "type": "string" } }, "type": "object", "key$": "date" }, "entity": { "example": "governmental", "type": "string", "key$": "entity" }, "isAnalysis": { "example": false, "type": "boolean", "key$": "isAnalysis" }, "isMobile": { "example": false, "type": "boolean", "key$": "isMobile" }, "location": { "example": "Downtown LA", "type": "string", "key$": "location" }, "locationId": { "example": 12345, "type": "integer", "key$": "locationId" }, "parameter": { "example": "pm25", "type": "string", "key$": "parameter" }, "sensorType": { "example": "reference grade", "type": "string", "key$": "sensorType" }, "unit": { "example": "µg/m³", "type": "string", "key$": "unit" }, "value": { "example": 12.5, "type": "number", "key$": "value" } }, "type": "object", "index$": 0 }, "key$": "results", "type": "array" } } } } } }, "400": { "description": "Bad request - invalid parameters", "content": { "application/json": { "schema": { "type": "object", "properties": { "statusCode": { "type": "integer", "example": 400 }, "error": { "type": "string", "example": "Bad Request" }, "message": { "type": "string", "example": "Invalid parameter value" } }, "x-ref": "#/components/schemas/Error" } } } }, "429": { "description": "Rate limit exceeded", "content": { "application/json": { "schema": { "type": "object", "properties": { "statusCode": { "type": "integer", "example": 400 }, "error": { "type": "string", "example": "Bad Request" }, "message": { "type": "string", "example": "Invalid parameter value" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "statusCode": { "type": "integer", "example": 400 }, "error": { "type": "string", "example": "Bad Request" }, "message": { "type": "string", "example": "Invalid parameter value" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "limit", "in": "query", "description": "Number of results to return (max 1000)", "schema": { "type": "integer", "default": 100, "minimum": 1, "maximum": 10000 }, "index$": 0 }, { "name": "page", "in": "query", "description": "Page number for pagination", "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 1 }, { "name": "country", "in": "query", "description": "Filter by country code (ISO 3166-1 alpha-2)", "schema": { "type": "string", "pattern": "^[A-Z]{2}$" }, "index$": 2 }, { "name": "city", "in": "query", "description": "Filter by city name", "schema": { "type": "string" }, "index$": 3 }, { "name": "location", "in": "query", "description": "Filter by location name or ID", "schema": { "type": "string" }, "index$": 4 }, { "name": "location_id", "in": "query", "description": "Filter by location ID", "schema": { "type": "integer" }, "index$": 5 }, { "name": "parameter", "in": "query", "description": "Filter by parameter (e.g., pm25, pm10, o3, no2, so2, co)", "schema": { "type": "string", "enum": ["pm25", "pm10", "o3", "no2", "so2", "co", "bc"] }, "index$": 6 }, { "name": "date_from", "in": "query", "description": "Start date for measurements (ISO 8601 format)", "schema": { "type": "string", "format": "date-time", "example": "2024-01-01T00:00:00Z" }, "index$": 7 }, { "name": "date_to", "in": "query", "description": "End date for measurements (ISO 8601 format)", "schema": { "type": "string", "format": "date-time", "example": "2024-01-31T23:59:59Z" }, "index$": 8 }, { "name": "coordinates", "in": "query", "description": "Center point for radius search (latitude,longitude)", "schema": { "type": "string", "pattern": "^-?\\d+\\.\\d+,-?\\d+\\.\\d+$" }, "index$": 9 }, { "name": "radius", "in": "query", "description": "Radius in meters for coordinate-based search", "schema": { "type": "integer", "minimum": 1, "maximum": 100000 }, "index$": 10 }, { "name": "value_from", "in": "query", "description": "Minimum measurement value", "schema": { "type": "number" }, "index$": 11 }, { "name": "value_to", "in": "query", "description": "Maximum measurement value", "schema": { "type": "number" }, "index$": 12 }, { "name": "order_by", "in": "query", "description": "Field to order results by", "schema": { "type": "string", "enum": ["city", "country", "location", "datetime"], "default": "datetime" }, "index$": 13 }, { "name": "sort", "in": "query", "description": "Sort order", "schema": { "type": "string", "enum": ["asc", "desc"], "default": "desc" }, "index$": 14 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let measurement_ref01_data = Object.values(setup.data.existing.measurement)[0];
        // LIST
        const measurement_ref01_ent = client.Measurement();
        const measurement_ref01_match = {};
        const measurement_ref01_list = (await measurement_ref01_ent.list(measurement_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/measurement/MeasurementTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenaqPlatformSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['measurement01', 'measurement02', 'measurement03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPENAQ_PLATFORM_TEST_MEASUREMENT_ENTID': idmap,
        'OPENAQ_PLATFORM_TEST_LIVE': 'FALSE',
        'OPENAQ_PLATFORM_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['OPENAQ_PLATFORM_TEST_MEASUREMENT_ENTID'];
    const live = 'TRUE' === env.OPENAQ_PLATFORM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPENAQ_PLATFORM_TEST_MEASUREMENT_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.OpenaqPlatformSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=MeasurementEntity.test.js.map