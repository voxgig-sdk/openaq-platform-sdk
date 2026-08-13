# OpenaqPlatform SDK feature factory

from openaqplatform_sdk.feature.base_feature import OpenaqPlatformBaseFeature
from openaqplatform_sdk.feature.test_feature import OpenaqPlatformTestFeature


def _make_feature(name):
    features = {
        "base": lambda: OpenaqPlatformBaseFeature(),
        "test": lambda: OpenaqPlatformTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
