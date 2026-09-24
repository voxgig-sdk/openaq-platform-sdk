
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OpenaqPlatformSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = OpenaqPlatformSDK.test()
    equal(testsdk instanceof OpenaqPlatformSDK, true,
      'OpenaqPlatformSDK.test() must return a client synchronously')
  })

})
