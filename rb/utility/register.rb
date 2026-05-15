# OpenaqPlatform SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

OpenaqPlatformUtility.registrar = ->(u) {
  u.clean = OpenaqPlatformUtilities::Clean
  u.done = OpenaqPlatformUtilities::Done
  u.make_error = OpenaqPlatformUtilities::MakeError
  u.feature_add = OpenaqPlatformUtilities::FeatureAdd
  u.feature_hook = OpenaqPlatformUtilities::FeatureHook
  u.feature_init = OpenaqPlatformUtilities::FeatureInit
  u.fetcher = OpenaqPlatformUtilities::Fetcher
  u.make_fetch_def = OpenaqPlatformUtilities::MakeFetchDef
  u.make_context = OpenaqPlatformUtilities::MakeContext
  u.make_options = OpenaqPlatformUtilities::MakeOptions
  u.make_request = OpenaqPlatformUtilities::MakeRequest
  u.make_response = OpenaqPlatformUtilities::MakeResponse
  u.make_result = OpenaqPlatformUtilities::MakeResult
  u.make_point = OpenaqPlatformUtilities::MakePoint
  u.make_spec = OpenaqPlatformUtilities::MakeSpec
  u.make_url = OpenaqPlatformUtilities::MakeUrl
  u.param = OpenaqPlatformUtilities::Param
  u.prepare_auth = OpenaqPlatformUtilities::PrepareAuth
  u.prepare_body = OpenaqPlatformUtilities::PrepareBody
  u.prepare_headers = OpenaqPlatformUtilities::PrepareHeaders
  u.prepare_method = OpenaqPlatformUtilities::PrepareMethod
  u.prepare_params = OpenaqPlatformUtilities::PrepareParams
  u.prepare_path = OpenaqPlatformUtilities::PreparePath
  u.prepare_query = OpenaqPlatformUtilities::PrepareQuery
  u.result_basic = OpenaqPlatformUtilities::ResultBasic
  u.result_body = OpenaqPlatformUtilities::ResultBody
  u.result_headers = OpenaqPlatformUtilities::ResultHeaders
  u.transform_request = OpenaqPlatformUtilities::TransformRequest
  u.transform_response = OpenaqPlatformUtilities::TransformResponse
}
