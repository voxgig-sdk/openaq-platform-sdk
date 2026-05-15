# OpenaqPlatform SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module OpenaqPlatformFeatures
  def self.make_feature(name)
    case name
    when "base"
      OpenaqPlatformBaseFeature.new
    when "test"
      OpenaqPlatformTestFeature.new
    else
      OpenaqPlatformBaseFeature.new
    end
  end
end
