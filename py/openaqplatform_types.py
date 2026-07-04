# Typed models for the OpenaqPlatform SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Location(TypedDict, total=False):
    city: str
    coordinate: dict
    country: str
    id: int
    is_analysi: bool
    is_mobile: bool
    location: str
    parameter: list
    source: list


class LocationListMatch(TypedDict, total=False):
    city: str
    coordinate: dict
    country: str
    id: int
    is_analysi: bool
    is_mobile: bool
    location: str
    parameter: list
    source: list


class Measurement(TypedDict, total=False):
    city: str
    coordinate: dict
    country: str
    date: dict
    entity: str
    is_analysi: bool
    is_mobile: bool
    location: str
    location_id: int
    parameter: str
    sensor_type: str
    unit: str
    value: float


class MeasurementListMatch(TypedDict, total=False):
    city: str
    coordinate: dict
    country: str
    date: dict
    entity: str
    is_analysi: bool
    is_mobile: bool
    location: str
    location_id: int
    parameter: str
    sensor_type: str
    unit: str
    value: float
