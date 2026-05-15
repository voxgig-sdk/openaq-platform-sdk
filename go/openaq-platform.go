package voxgigopenaqplatformsdk

import (
	"github.com/voxgig-sdk/openaq-platform-sdk/core"
	"github.com/voxgig-sdk/openaq-platform-sdk/entity"
	"github.com/voxgig-sdk/openaq-platform-sdk/feature"
	_ "github.com/voxgig-sdk/openaq-platform-sdk/utility"
)

// Type aliases preserve external API.
type OpenaqPlatformSDK = core.OpenaqPlatformSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type OpenaqPlatformEntity = core.OpenaqPlatformEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type OpenaqPlatformError = core.OpenaqPlatformError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewLocationEntityFunc = func(client *core.OpenaqPlatformSDK, entopts map[string]any) core.OpenaqPlatformEntity {
		return entity.NewLocationEntity(client, entopts)
	}
	core.NewMeasurementEntityFunc = func(client *core.OpenaqPlatformSDK, entopts map[string]any) core.OpenaqPlatformEntity {
		return entity.NewMeasurementEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewOpenaqPlatformSDK = core.NewOpenaqPlatformSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
