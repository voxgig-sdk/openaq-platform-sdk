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
# @!attribute [rw] coordinates
#   @return [Hash, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] isAnalysis
#   @return [Boolean, nil]
#
# @!attribute [rw] isMobile
#   @return [Boolean, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] parameters
#   @return [Array, nil]
#
# @!attribute [rw] sources
#   @return [Array, nil]
Location = Struct.new(
  :city,
  :coordinates,
  :country,
  :id,
  :isAnalysis,
  :isMobile,
  :location,
  :parameters,
  :sources,
  keyword_init: true
)

# Request payload for Location#list.
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] coordinate
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] parameter
#   @return [String, nil]
#
# @!attribute [rw] radius
#   @return [Integer, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
LocationListMatch = Struct.new(
  :city,
  :coordinate,
  :country,
  :limit,
  :location,
  :order_by,
  :page,
  :parameter,
  :radius,
  :sort,
  keyword_init: true
)

# Measurement entity data model.
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] coordinates
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
# @!attribute [rw] isAnalysis
#   @return [Boolean, nil]
#
# @!attribute [rw] isMobile
#   @return [Boolean, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] locationId
#   @return [Integer, nil]
#
# @!attribute [rw] parameter
#   @return [String, nil]
#
# @!attribute [rw] sensorType
#   @return [String, nil]
#
# @!attribute [rw] unit
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
Measurement = Struct.new(
  :city,
  :coordinates,
  :country,
  :date,
  :entity,
  :isAnalysis,
  :isMobile,
  :location,
  :locationId,
  :parameter,
  :sensorType,
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
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] date_from
#   @return [String, nil]
#
# @!attribute [rw] date_to
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] location_id
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] parameter
#   @return [String, nil]
#
# @!attribute [rw] radius
#   @return [Integer, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] value_from
#   @return [Float, nil]
#
# @!attribute [rw] value_to
#   @return [Float, nil]
MeasurementListMatch = Struct.new(
  :city,
  :coordinate,
  :country,
  :date_from,
  :date_to,
  :limit,
  :location,
  :location_id,
  :order_by,
  :page,
  :parameter,
  :radius,
  :sort,
  :value_from,
  :value_to,
  keyword_init: true
)

