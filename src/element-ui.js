import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import { Input, InputNumber, Button, Row, Col, Message, Card, Icon, Form, FormItem, DatePicker, Select, OptionGroup, Option, Scrollbar, Upload } from 'element-ui'

Vue.component(DatePicker.name, DatePicker)
Vue.component(Upload.name, Upload)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Scrollbar.name, Scrollbar)
Vue.component(Input.name, Input)
Vue.component(InputNumber.name, InputNumber)
Vue.component(Button.name, Button)
Vue.component(Card.name, Card)
Vue.component(Icon.name, Icon)
Vue.component(Select.name, Select)
Vue.component(OptionGroup.name, OptionGroup)
Vue.component(Option.name, Option)

try {
  var b = Message
  Vue.prototype.$message = {
    success: function(message, conf = {}) {
      b({
        customClass: 'alertContainer',
        type: 'success',
        message,
        showClose: !!+conf.showClose,
        center: !!+conf.center
      })
    },
    error: function(message, conf = {}) {
      b({
        customClass: 'alertContainer',
        type: 'error',
        message,
        showClose: !!+conf.showClose,
        center: !!+conf.center
      })
    },
    warning: function(message, conf = {}) {
      b({
        customClass: 'alertContainer',
        type: 'warning',
        message,
        showClose: !!+conf.showClose,
        center: !!+conf.center
      })
    }
  }
} catch (e) {
  console.log(e)
} finally {
  //
}
