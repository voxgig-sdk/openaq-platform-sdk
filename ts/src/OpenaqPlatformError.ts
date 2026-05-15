
import { Context } from './Context'


class OpenaqPlatformError extends Error {

  isOpenaqPlatformError = true

  sdk = 'OpenaqPlatform'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  OpenaqPlatformError
}

