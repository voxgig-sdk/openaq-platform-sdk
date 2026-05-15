<?php
declare(strict_types=1);

// OpenaqPlatform SDK utility: prepare_path

class OpenaqPlatformPreparePath
{
    public static function call(OpenaqPlatformContext $ctx): string
    {
        $point = $ctx->point;
        $parts = [];
        if ($point) {
            $p = \Voxgig\Struct\Struct::getprop($point, 'parts');
            if (is_array($p)) {
                $parts = $p;
            }
        }
        return \Voxgig\Struct\Struct::join($parts, '/', true);
    }
}
