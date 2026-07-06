-- Typed models for the OpenaqPlatform SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Location
---@field city? string
---@field coordinate? table
---@field country? string
---@field id? number
---@field is_analysi? boolean
---@field is_mobile? boolean
---@field location? string
---@field parameter? table
---@field source? table

---@class LocationListMatch
---@field city? string
---@field coordinate? table
---@field country? string
---@field id? number
---@field is_analysi? boolean
---@field is_mobile? boolean
---@field location? string
---@field parameter? table
---@field source? table

---@class Measurement
---@field city? string
---@field coordinate? table
---@field country? string
---@field date? table
---@field entity? string
---@field is_analysi? boolean
---@field is_mobile? boolean
---@field location? string
---@field location_id? number
---@field parameter? string
---@field sensor_type? string
---@field unit? string
---@field value? number

---@class MeasurementListMatch
---@field city? string
---@field coordinate? table
---@field country? string
---@field date? table
---@field entity? string
---@field is_analysi? boolean
---@field is_mobile? boolean
---@field location? string
---@field location_id? number
---@field parameter? string
---@field sensor_type? string
---@field unit? string
---@field value? number

local M = {}

return M
