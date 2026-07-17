-- OpenaqPlatform SDK exists test

local sdk = require("openaq-platform_sdk")

describe("OpenaqPlatformSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
