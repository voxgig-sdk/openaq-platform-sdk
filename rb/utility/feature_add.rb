# OpenaqPlatform SDK utility: feature_add
module OpenaqPlatformUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
