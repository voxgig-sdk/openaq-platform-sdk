<?php
declare(strict_types=1);

// OpenaqPlatform SDK exists test

require_once __DIR__ . '/../openaqplatform_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = OpenaqPlatformSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
