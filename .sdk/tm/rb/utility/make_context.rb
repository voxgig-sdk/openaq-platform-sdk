# OpenaqPlatform SDK utility: make_context
require_relative '../core/context'
module OpenaqPlatformUtilities
  MakeContext = ->(ctxmap, basectx) {
    OpenaqPlatformContext.new(ctxmap, basectx)
  }
end
