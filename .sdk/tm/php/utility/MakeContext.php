<?php
declare(strict_types=1);

// OpenaqPlatform SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class OpenaqPlatformMakeContext
{
    public static function call(array $ctxmap, ?OpenaqPlatformContext $basectx): OpenaqPlatformContext
    {
        return new OpenaqPlatformContext($ctxmap, $basectx);
    }
}
