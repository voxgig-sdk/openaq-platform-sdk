# OpenaqPlatform SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module OpenaqPlatformFeatures
  def self.make_feature(name)
    case name
    when "base"
      OpenaqPlatformBaseFeature.new
    when "ratelimit"
      OpenaqPlatformRatelimitFeature.new
    when "retry"
      OpenaqPlatformRetryFeature.new
    when "test"
      OpenaqPlatformTestFeature.new
    when "timeout"
      OpenaqPlatformTimeoutFeature.new
    else
      OpenaqPlatformBaseFeature.new
    end
  end
end
