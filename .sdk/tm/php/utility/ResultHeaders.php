<?php
declare(strict_types=1);

// OpenaqPlatform SDK utility: result_headers

class OpenaqPlatformResultHeaders
{
    public static function call(OpenaqPlatformContext $ctx): ?OpenaqPlatformResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
