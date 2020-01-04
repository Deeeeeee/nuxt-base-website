import Vue from 'vue'
import {
  Cell,
  CellGroup,
  Field,
  Toast,
  Area,
  Popup,
  List,
  Tab,
  Tabs,
  Icon,
  Uploader,
  Picker,
  Swipe,
  SwipeItem
} from 'vant'

export default () => {
  Vue.use(Field)
  Vue.use(Cell)
  Vue.use(CellGroup)
  Vue.use(Toast)
  Vue.use(Area)
  Vue.use(Popup)
  Vue.use(List)
  Vue.use(Tab)
  Vue.use(Tabs)
  Vue.use(Icon)
  Vue.use(Uploader)
  Vue.use(Picker)
  Vue.use(Swipe).use(SwipeItem)
}
