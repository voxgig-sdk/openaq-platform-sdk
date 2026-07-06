# frozen_string_literal: true

# Typed models for the OpenaqPlatform SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Location entity data model.
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] coordinate
#   @return [Hash, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] is_analysi
#   @return [Boolean, nil]
#
# @!attribute [rw] is_mobile
#   @return [Boolean, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] parameter
#   @return [Array, nil]
#
# @!attribute [rw] source
#   @return [Array, nil]
Location = Struct.new(
  :city,
  :coordinate,
  :country,
  :id,
  :is_analysi,
  :is_mobile,
  :location,
  :parameter,
  :source,
  keyword_init: true
)

# Request payload for Location#list.
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] coordinate
#   @return [Hash, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] is_analysi
#   @return [Boolean, nil]
#
# @!attribute [rw] is_mobile
#   @return [Boolean, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] parameter
#   @return [Array, nil]
#
# @!attribute [rw] source
#   @return [Array, nil]
LocationListMatch = Struct.new(
  :city,
  :coordinate,
  :country,
  :id,
  :is_analysi,
  :is_mobile,
  :location,
  :parameter,
  :source,
  keyword_init: true
)

# Measurement entity data model.
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] coordinate
#   @return [Hash, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [Hash, nil]
#
# @!attribute [rw] entity
#   @return [String, nil]
#
# @!attribute [rw] is_analysi
#   @return [Boolean, nil]
#
# @!attribute [rw] is_mobile
#   @return [Boolean, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] location_id
#   @return [Integer, nil]
#
# @!attribute [rw] parameter
#   @return [String, nil]
#
# @!attribute [rw] sensor_type
#   @return [String, nil]
#
# @!attribute [rw] unit
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
Measurement = Struct.new(
  :city,
  :coordinate,
  :country,
  :date,
  :entity,
  :is_analysi,
  :is_mobile,
  :location,
  :location_id,
  :parameter,
  :sensor_type,
  :unit,
  :value,
  keyword_init: true
)

# Request payload for Measurement#list.
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] coordinate
#   @return [Hash, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [Hash, nil]
#
# @!attribute [rw] entity
#   @return [String, nil]
#
# @!attribute [rw] is_analysi
#   @return [Boolean, nil]
#
# @!attribute [rw] is_mobile
#   @return [Boolean, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] location_id
#   @return [Integer, nil]
#
# @!attribute [rw] parameter
#   @return [String, nil]
#
# @!attribute [rw] sensor_type
#   @return [String, nil]
#
# @!attribute [rw] unit
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
MeasurementListMatch = Struct.new(
  :city,
  :coordinate,
  :country,
  :date,
  :entity,
  :is_analysi,
  :is_mobile,
  :location,
  :location_id,
  :parameter,
  :sensor_type,
  :unit,
  :value,
  keyword_init: true
)

