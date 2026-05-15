<?php
declare(strict_types=1);

// OpenaqPlatform SDK utility: feature_add

class OpenaqPlatformFeatureAdd
{
    public static function call(OpenaqPlatformContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
