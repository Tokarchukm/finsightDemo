import { DefaultForm } from '../forms/DefaultForm'
import config from '../../config'

const form = new DefaultForm()

export async function login(email, password) {
  await form.fill({ email, password })
  if (email && password) {
    await form.submit()
  }
}

export function loginAs(role) {
  const username = `TC_${role.toUpperCase()}_USERNAME`
  const password = `TC_${role.toUpperCase()}_PASSWORD`

  return login(config[username], config[password])
}
