<?php
declare(strict_types=1);

// OpenaqPlatform SDK utility: prepare_body

class OpenaqPlatformPrepareBody
{
    public static function call(OpenaqPlatformContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
