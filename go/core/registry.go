package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewLocationEntityFunc func(client *OpenaqPlatformSDK, entopts map[string]any) OpenaqPlatformEntity

var NewMeasurementEntityFunc func(client *OpenaqPlatformSDK, entopts map[string]any) OpenaqPlatformEntity

