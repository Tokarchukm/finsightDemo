import { loginAs } from '../../lib/helpers/loginAs.js'
import { url } from '../../lib/helpers/url'
import { getCookie } from './ui'

fixture('random tests')
  .page(url('login'))

test('User can get ssid values', async (t) => {
  await loginAs('client')
  await t.wait(2000)
  console.log(await getSsid())
  
})