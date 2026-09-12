import { OpenaqPlatformEntityBase } from '../OpenaqPlatformEntityBase';
import type { OpenaqPlatformSDK } from '../OpenaqPlatformSDK';
import type { Control } from '../types';
import type { Measurement, MeasurementListMatch } from '../OpenaqPlatformTypes';
declare class MeasurementEntity extends OpenaqPlatformEntityBase<Measurement> {
    constructor(client: OpenaqPlatformSDK, entopts: any);
    make(this: MeasurementEntity): MeasurementEntity;
    list(this: any, reqmatch?: MeasurementListMatch, ctrl?: Control): Promise<MeasurementEntity[]>;
}
export { MeasurementEntity };
