import { Context } from './Context';
declare class OpenaqPlatformError extends Error {
    isOpenaqPlatformError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { OpenaqPlatformError };
