import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(Vuetify,{
  iconfont: 'mdi'
})

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.filter('two_digits', function (value) {
  if(value.toString().length <= 1)
  {
      return "0"+value.toString();
  }
  return value.toString();
});