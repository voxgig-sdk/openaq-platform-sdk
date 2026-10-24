# OpenaqPlatform SDK utility: prepare_body
require_relative 'media'
module OpenaqPlatformUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return OpenaqPlatformUtilities.raw_body(ctx.reqdata) if OpenaqPlatformUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
