
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OpenaqPlatformSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await OpenaqPlatformSDK.test()
    equal(null !== testsdk, true)
  })

})
