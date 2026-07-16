<?php
declare(strict_types=1);

// OpenaqPlatform SDK base feature

class OpenaqPlatformBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(OpenaqPlatformContext $ctx, array $options): void {}
    public function PostConstruct(OpenaqPlatformContext $ctx): void {}
    public function PostConstructEntity(OpenaqPlatformContext $ctx): void {}
    public function SetData(OpenaqPlatformContext $ctx): void {}
    public function GetData(OpenaqPlatformContext $ctx): void {}
    public function GetMatch(OpenaqPlatformContext $ctx): void {}
    public function SetMatch(OpenaqPlatformContext $ctx): void {}
    public function PrePoint(OpenaqPlatformContext $ctx): void {}
    public function PreSpec(OpenaqPlatformContext $ctx): void {}
    public function PreRequest(OpenaqPlatformContext $ctx): void {}
    public function PreResponse(OpenaqPlatformContext $ctx): void {}
    public function PreResult(OpenaqPlatformContext $ctx): void {}
    public function PreDone(OpenaqPlatformContext $ctx): void {}
    public function PreUnexpected(OpenaqPlatformContext $ctx): void {}
}
