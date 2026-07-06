// Typed models for the OpenaqPlatform SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Location {
  city?: string
  coordinate?: Record<string, any>
  country?: string
  id?: number
  is_analysi?: boolean
  is_mobile?: boolean
  location?: string
  parameter?: any[]
  source?: any[]
}

export interface LocationListMatch {
  city?: string
  coordinate?: Record<string, any>
  country?: string
  id?: number
  is_analysi?: boolean
  is_mobile?: boolean
  location?: string
  parameter?: any[]
  source?: any[]
}

export interface Measurement {
  city?: string
  coordinate?: Record<string, any>
  country?: string
  date?: Record<string, any>
  entity?: string
  is_analysi?: boolean
  is_mobile?: boolean
  location?: string
  location_id?: number
  parameter?: string
  sensor_type?: string
  unit?: string
  value?: number
}

export interface MeasurementListMatch {
  city?: string
  coordinate?: Record<string, any>
  country?: string
  date?: Record<string, any>
  entity?: string
  is_analysi?: boolean
  is_mobile?: boolean
  location?: string
  location_id?: number
  parameter?: string
  sensor_type?: string
  unit?: string
  value?: number
}

