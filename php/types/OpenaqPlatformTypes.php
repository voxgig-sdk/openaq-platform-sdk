<?php
declare(strict_types=1);

// Typed models for the OpenaqPlatform SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Location entity data model. */
class Location
{
    public ?string $city = null;
    public ?array $coordinate = null;
    public ?string $country = null;
    public ?int $id = null;
    public ?bool $is_analysi = null;
    public ?bool $is_mobile = null;
    public ?string $location = null;
    public ?array $parameter = null;
    public ?array $source = null;
}

/** Match filter for Location#list (any subset of Location fields). */
class LocationListMatch
{
    public ?string $city = null;
    public ?array $coordinate = null;
    public ?string $country = null;
    public ?int $id = null;
    public ?bool $is_analysi = null;
    public ?bool $is_mobile = null;
    public ?string $location = null;
    public ?array $parameter = null;
    public ?array $source = null;
}

/** Measurement entity data model. */
class Measurement
{
    public ?string $city = null;
    public ?array $coordinate = null;
    public ?string $country = null;
    public ?array $date = null;
    public ?string $entity = null;
    public ?bool $is_analysi = null;
    public ?bool $is_mobile = null;
    public ?string $location = null;
    public ?int $location_id = null;
    public ?string $parameter = null;
    public ?string $sensor_type = null;
    public ?string $unit = null;
    public ?float $value = null;
}

/** Match filter for Measurement#list (any subset of Measurement fields). */
class MeasurementListMatch
{
    public ?string $city = null;
    public ?array $coordinate = null;
    public ?string $country = null;
    public ?array $date = null;
    public ?string $entity = null;
    public ?bool $is_analysi = null;
    public ?bool $is_mobile = null;
    public ?string $location = null;
    public ?int $location_id = null;
    public ?string $parameter = null;
    public ?string $sensor_type = null;
    public ?string $unit = null;
    public ?float $value = null;
}

