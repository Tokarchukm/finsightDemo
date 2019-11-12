import { t, ClientFunction } from 'testcafe'


export const getSsid = ClientFunction( () => {
    const ssidRegExp = /ssid/gm
    return document.cookie.split(';').find(elem=> ssidRegExp.test(elem))
})