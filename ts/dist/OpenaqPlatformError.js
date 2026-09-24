"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenaqPlatformError = void 0;
class OpenaqPlatformError extends Error {
    isOpenaqPlatformError = true;
    sdk = 'OpenaqPlatform';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.OpenaqPlatformError = OpenaqPlatformError;
//# sourceMappingURL=OpenaqPlatformError.js.map