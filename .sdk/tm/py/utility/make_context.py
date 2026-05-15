# OpenaqPlatform SDK utility: make_context

from core.context import OpenaqPlatformContext


def make_context_util(ctxmap, basectx):
    return OpenaqPlatformContext(ctxmap, basectx)
