import { LocationEntity } from './entity/LocationEntity';
import { MeasurementEntity } from './entity/MeasurementEntity';
export type * from './OpenaqPlatformTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { OpenaqPlatformEntityBase } from './OpenaqPlatformEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class OpenaqPlatformSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Location(entopts?: Record<string, any>): LocationEntity;
    Measurement(entopts?: Record<string, any>): MeasurementEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): OpenaqPlatformSDK;
    tester(testopts?: any, sdkopts?: any): OpenaqPlatformSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof OpenaqPlatformSDK;
export { stdutil, config, BaseFeature, OpenaqPlatformEntityBase, OpenaqPlatformSDK, SDK, };
