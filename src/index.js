import Card from './components/Card'
import CardTable from './components/CardTable'
import CardTools from './components/CardTools'
import Gallery from './components/Gallery'
import SummernoteEditor from './components/SummernoteEditor'
import UploadFile from './components/UploadFile'

const version = '__VERSION__'

const install = Vue => {
  /*
   * NOTE:
   *   if you need to extend Vue contstructor, you can extend it in here.
   */

  Vue.component(Card.name, Card)
  Vue.component(CardTable.name, CardTable)
  Vue.component(CardTools.name, CardTools)
  Vue.component(Gallery.name, Gallery)
  Vue.component(SummernoteEditor.name, SummernoteEditor)
  Vue.component(UploadFile.name, UploadFile)
}

const plugin = {
  install,
  version
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
