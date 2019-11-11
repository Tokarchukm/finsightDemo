import { url } from '../../lib/helpers/url'
import { login, loginAs } from '../../lib/helpers/loginAs.js'
import config from '../../config'
import {
  loginFormIsVisible,
  menuBarIsVisible,
  loginButtonIsNotVisible,
  errorMsgIsVisible,
  logout,
} from './ui'


fixture
  .meta('tag', 'smoke')('Authorization')
  .page(url('login'))

test.meta({ smoke: 'true'})('User can log in by entering valid data', async (t) => {
  await loginAs('client')

  await t.expect(menuBarIsVisible()).ok()
})


test.meta({ smoke: 'true' })('Authorization is not possible if you enter an invalid password', async (t) => {
  await login(config.TC_CLIENT_USERNAME, 'passwordtest')

  await t.expect(errorMsgIsVisible()).ok()
})

test.meta({ smoke: 'true' })('Authorization is not possible if you enter an invalid account', async (t) => {
  await login('usernametest', config.TC_CLIENT_PASSWORD)

  await t.expect(errorMsgIsVisible()).ok()
})

test.meta({ smoke: 'true' })('Authorization is not possible unless you enter a password', async (t) => {
  await login(config.TC_CLIENT_USERNAME, '')

  await t.expect(loginButtonIsNotVisible()).ok()
})

test.meta({ smoke: 'true' })('Authorization is not possible unless you enter an account', async (t) => {
  await login('', config.TC_CLIENT_PASSWORD)

  await t.expect(loginButtonIsNotVisible()).ok()
})

test.meta({ smoke: 'true' })('Authorization is not possible unless you enter your password and account', async (t) => {
  await login('', '')

  await t.expect(loginButtonIsNotVisible()).ok()
})

test.meta({ smoke: 'true' })('The user can log out after authorization', async (t) => {
  await loginAs('client')
  await logout()

  await t.expect(loginFormIsVisible()).ok()
})
