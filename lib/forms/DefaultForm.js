import { t, Selector } from 'testcafe'
import { TextControl } from './controls/TextControl'

async function assignControlFor(sel) {
    // we can add conditions depends on controler for input we need
    return new TextControl(sel)
}
export class DefaultForm {
    constructor() {
      const root = Selector('body.usersApp')
  
      this.selectors = {
        root,
        loginButton: Selector('.\_3AJnDdx518CN4MEuHGx_uj').filter('button:not(.is-disabled)'),
      }
// TODO: add test atributes in DOM tree for needed elements 

    }
  
    async field(key) {
      const input = this.selectorFor(key)
      const control = await assignControlFor(input)
      return control
    }
  
    async fill(attrs) {
      await Object.keys(attrs).reduce(async (promise, key) => {
        await promise
        const control = await this.field(key)
        await control.set(attrs[key])
      }, Promise.resolve())
    }

   selectorFor(key) {
      return this.selectors.root.find(`input[name=${key}]`)
    }
   
    async submit() {
       await t.click(this.selectors.loginButton)
    }
  }
  