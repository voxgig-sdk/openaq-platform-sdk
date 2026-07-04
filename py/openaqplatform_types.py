# Typed models for the OpenaqPlatform SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Location:
    city: Optional[str] = None
    coordinate: Optional[dict] = None
    country: Optional[str] = None
    id: Optional[int] = None
    is_analysi: Optional[bool] = None
    is_mobile: Optional[bool] = None
    location: Optional[str] = None
    parameter: Optional[list] = None
    source: Optional[list] = None


@dataclass
class LocationListMatch:
    city: Optional[str] = None
    coordinate: Optional[dict] = None
    country: Optional[str] = None
    id: Optional[int] = None
    is_analysi: Optional[bool] = None
    is_mobile: Optional[bool] = None
    location: Optional[str] = None
    parameter: Optional[list] = None
    source: Optional[list] = None


@dataclass
class Measurement:
    city: Optional[str] = None
    coordinate: Optional[dict] = None
    country: Optional[str] = None
    date: Optional[dict] = None
    entity: Optional[str] = None
    is_analysi: Optional[bool] = None
    is_mobile: Optional[bool] = None
    location: Optional[str] = None
    location_id: Optional[int] = None
    parameter: Optional[str] = None
    sensor_type: Optional[str] = None
    unit: Optional[str] = None
    value: Optional[float] = None


@dataclass
class MeasurementListMatch:
    city: Optional[str] = None
    coordinate: Optional[dict] = None
    country: Optional[str] = None
    date: Optional[dict] = None
    entity: Optional[str] = None
    is_analysi: Optional[bool] = None
    is_mobile: Optional[bool] = None
    location: Optional[str] = None
    location_id: Optional[int] = None
    parameter: Optional[str] = None
    sensor_type: Optional[str] = None
    unit: Optional[str] = None
    value: Optional[float] = None

