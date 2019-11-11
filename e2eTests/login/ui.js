import { t, Selector } from 'testcafe'
import { DefaultForm } from '../../lib/forms/DefaultForm'

const form = new DefaultForm()

const loginForm = Selector('.\_3bVuIoZ6plzNYEqBBtzr21')
const menuTabList = Selector('.\_2n4mx7WxAvkHY51ol0p1IB')
const loginButton = Selector('.\_3AJnDdx518CN4MEuHGx_uj')
const errorMsg = Selector('._3Ly_38dqhZoOkj_WF7nNta')

export const loginFormIsVisible = () => loginForm.with({ visibilityCheck: true }).exists
export const errorMsgIsVisible = () => errorMsg.with({ visibilityCheck: true }).exists
export const menuBarIsVisible = () => menuTabList.with({ visibilityCheck: true }).exists
export const loginButtonIsNotVisible = () => loginButton.with({ visibilityCheck: false }).exists

export const profileName = Selector('.\_33_sN1q7w9I9ob6BU3rhj1')
export const logoutButton = Selector('.\_1fX_p-BV6GRkg5rNNWhhCy')

export async function logout() {
    await t.click(profileName)
    await t.click(logoutButton)
}
