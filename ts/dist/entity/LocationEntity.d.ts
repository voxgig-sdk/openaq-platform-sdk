import { OpenaqPlatformEntityBase } from '../OpenaqPlatformEntityBase';
import type { OpenaqPlatformSDK } from '../OpenaqPlatformSDK';
import type { Control } from '../types';
import type { Location, LocationListMatch } from '../OpenaqPlatformTypes';
declare class LocationEntity extends OpenaqPlatformEntityBase<Location> {
    constructor(client: OpenaqPlatformSDK, entopts: any);
    make(this: LocationEntity): LocationEntity;
    list(this: any, reqmatch?: LocationListMatch, ctrl?: Control): Promise<LocationEntity[]>;
}
export { LocationEntity };
