<?php
declare(strict_types=1);

// OpenaqPlatform SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

OpenaqPlatformUtility::setRegistrar(function (OpenaqPlatformUtility $u): void {
    $u->clean = [OpenaqPlatformClean::class, 'call'];
    $u->done = [OpenaqPlatformDone::class, 'call'];
    $u->make_error = [OpenaqPlatformMakeError::class, 'call'];
    $u->feature_add = [OpenaqPlatformFeatureAdd::class, 'call'];
    $u->feature_hook = [OpenaqPlatformFeatureHook::class, 'call'];
    $u->feature_init = [OpenaqPlatformFeatureInit::class, 'call'];
    $u->fetcher = [OpenaqPlatformFetcher::class, 'call'];
    $u->make_fetch_def = [OpenaqPlatformMakeFetchDef::class, 'call'];
    $u->make_context = [OpenaqPlatformMakeContext::class, 'call'];
    $u->make_options = [OpenaqPlatformMakeOptions::class, 'call'];
    $u->make_request = [OpenaqPlatformMakeRequest::class, 'call'];
    $u->make_response = [OpenaqPlatformMakeResponse::class, 'call'];
    $u->make_result = [OpenaqPlatformMakeResult::class, 'call'];
    $u->make_point = [OpenaqPlatformMakePoint::class, 'call'];
    $u->make_spec = [OpenaqPlatformMakeSpec::class, 'call'];
    $u->make_url = [OpenaqPlatformMakeUrl::class, 'call'];
    $u->param = [OpenaqPlatformParam::class, 'call'];
    $u->prepare_auth = [OpenaqPlatformPrepareAuth::class, 'call'];
    $u->prepare_body = [OpenaqPlatformPrepareBody::class, 'call'];
    $u->prepare_headers = [OpenaqPlatformPrepareHeaders::class, 'call'];
    $u->prepare_method = [OpenaqPlatformPrepareMethod::class, 'call'];
    $u->prepare_params = [OpenaqPlatformPrepareParams::class, 'call'];
    $u->prepare_path = [OpenaqPlatformPreparePath::class, 'call'];
    $u->prepare_query = [OpenaqPlatformPrepareQuery::class, 'call'];
    $u->result_basic = [OpenaqPlatformResultBasic::class, 'call'];
    $u->result_body = [OpenaqPlatformResultBody::class, 'call'];
    $u->result_headers = [OpenaqPlatformResultHeaders::class, 'call'];
    $u->transform_request = [OpenaqPlatformTransformRequest::class, 'call'];
    $u->transform_response = [OpenaqPlatformTransformResponse::class, 'call'];
});
