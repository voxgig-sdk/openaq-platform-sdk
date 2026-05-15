# OpenaqPlatform SDK feature factory

from feature.base_feature import OpenaqPlatformBaseFeature
from feature.test_feature import OpenaqPlatformTestFeature


def _make_feature(name):
    features = {
        "base": lambda: OpenaqPlatformBaseFeature(),
        "test": lambda: OpenaqPlatformTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
