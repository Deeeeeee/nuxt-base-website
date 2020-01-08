import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
export default ({
  app
}) => {
  Vue.use(Element, {
    i18n: (key, value) => app.i18n.t(key, value)
  })
}

// import Vue from 'vue'
// import {
//   Input,
//   Button,
//   Form,
//   FormItem,
//   Pagination,
//   TabPane,
//   Tabs,
//   Table,
//   TableColumn,
//   Row,
//   Col,
//   Card,
//   Loading,
//   Popover,
//   Select,
//   Option,
//   Checkbox,
//   Radio,
//   RadioGroup,
//   // Message,
//   Cascader,
//   Upload,
//   Carousel,
//   CarouselItem,
//   Dialog } from 'element-ui'
//
// export default () => {
//   Vue.use(Input)
//   Vue.use(Button)
//   Vue.use(Form)
//   Vue.use(FormItem)
//   Vue.use(Pagination)
//   Vue.use(TabPane)
//   Vue.use(Tabs)
//   Vue.use(Table)
//   Vue.use(TableColumn)
//   Vue.use(Row)
//   Vue.use(Col)
//   Vue.use(Card)
//   Vue.use(Loading)
//   Vue.use(Popover)
//   Vue.use(Dialog)
//   Vue.use(Select)
//   Vue.use(Option)
//   Vue.use(Checkbox)
//   Vue.use(Radio)
//   Vue.use(RadioGroup)
//   Vue.use(Upload)
//   Vue.use(Cascader)
//   // Vue.use(Message);
//   Vue.use(Carousel)
//   Vue.use(CarouselItem)
// }
