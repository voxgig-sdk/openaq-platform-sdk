-- Typed models for the OpenaqPlatform SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Location
---@field city? string
---@field coordinates? table
---@field country? string
---@field id? number
---@field isAnalysis? boolean
---@field isMobile? boolean
---@field location? string
---@field parameters? table
---@field sources? table

---@class LocationListMatch
---@field city? string
---@field coordinate? string
---@field country? string
---@field limit? number
---@field location? string
---@field order_by? string
---@field page? number
---@field parameter? string
---@field radius? number
---@field sort? string

---@class Measurement
---@field city? string
---@field coordinates? table
---@field country? string
---@field date? table
---@field entity? string
---@field isAnalysis? boolean
---@field isMobile? boolean
---@field location? string
---@field locationId? number
---@field parameter? string
---@field sensorType? string
---@field unit? string
---@field value? number

---@class MeasurementListMatch
---@field city? string
---@field coordinate? string
---@field country? string
---@field date_from? string
---@field date_to? string
---@field limit? number
---@field location? string
---@field location_id? number
---@field order_by? string
---@field page? number
---@field parameter? string
---@field radius? number
---@field sort? string
---@field value_from? number
---@field value_to? number

local M = {}

return M
