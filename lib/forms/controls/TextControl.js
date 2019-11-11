import { t } from 'testcafe'

export class TextControl {
  constructor(sel) {
    this.sel = sel
  }

  async set(value) {
     if(value){ 
         await t.typeText(this.sel, value, { replace: true })
     } else { 
         await t.click(this.sel)
         await t.pressKey('ctrl+a delete')
        } 
  }
}
