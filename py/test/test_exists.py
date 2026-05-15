# ProjectName SDK exists test

import pytest
from openaqplatform_sdk import OpenaqPlatformSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = OpenaqPlatformSDK.test(None, None)
        assert testsdk is not None
