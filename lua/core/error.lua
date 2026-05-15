-- OpenaqPlatform SDK error

local OpenaqPlatformError = {}
OpenaqPlatformError.__index = OpenaqPlatformError


function OpenaqPlatformError.new(code, msg, ctx)
  local self = setmetatable({}, OpenaqPlatformError)
  self.is_sdk_error = true
  self.sdk = "OpenaqPlatform"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function OpenaqPlatformError:error()
  return self.msg
end


function OpenaqPlatformError:__tostring()
  return self.msg
end


return OpenaqPlatformError
