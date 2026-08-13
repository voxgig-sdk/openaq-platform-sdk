// Typed models for the OpenaqPlatform SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Location {
  city?: string
  coordinates?: Record<string, any>
  country?: string
  id?: number
  isAnalysis?: boolean
  isMobile?: boolean
  location?: string
  parameters?: any[]
  sources?: any[]
}

export interface LocationListMatch {
  city?: string
  coordinates?: Record<string, any>
  country?: string
  id?: number
  isAnalysis?: boolean
  isMobile?: boolean
  location?: string
  parameters?: any[]
  sources?: any[]
}

export interface Measurement {
  city?: string
  coordinates?: Record<string, any>
  country?: string
  date?: Record<string, any>
  entity?: string
  isAnalysis?: boolean
  isMobile?: boolean
  location?: string
  locationId?: number
  parameter?: string
  sensorType?: string
  unit?: string
  value?: number
}

export interface MeasurementListMatch {
  city?: string
  coordinates?: Record<string, any>
  country?: string
  date?: Record<string, any>
  entity?: string
  isAnalysis?: boolean
  isMobile?: boolean
  location?: string
  locationId?: number
  parameter?: string
  sensorType?: string
  unit?: string
  value?: number
}

