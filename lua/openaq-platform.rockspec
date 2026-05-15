package = "voxgig-sdk-openaq-platform"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/openaq-platform-sdk.git"
}
description = {
  summary = "OpenaqPlatform SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["openaq-platform_sdk"] = "openaq-platform_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
