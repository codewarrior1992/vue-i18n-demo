import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import zh from './assets/i18n/tw'
import en from './assets/i18n/en'
import jp from './assets/i18n/jp'

Vue.config.productionTip = false

Vue.use(VueAxios, axios);
Vue.use(VueI18n)

const numberFormats = {
  'zh-TW': {
    currency: {
      style: 'currency',
      currency: 'TWD',
      currencyDisplay: 'symbol'
    }
  },
  'en-US': {
    currency: {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'symbol'
    }
  },
  'ja-JP': {
    currency: {
      style: 'currency',
      currency: 'JPY',
      currencyDisplay: 'symbol'
    }
  }
}

const dateTimeFormats = {
  'zh-TW': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  'en-US': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  'ja-JP': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  }
}

const i18n = new VueI18n({
  locale:'',
  fallbackLocale:'en-US',
  numberFormats,
  dateTimeFormats
})

new Vue({
  router,
  store,
  i18n,
  created(){
    const vm = this;
    
    // set locale & messages
    vm.$i18n.locale = 'zh-TW',
    vm.$i18n.setLocaleMessage('zh-TW', zh); 
    vm.$i18n.setLocaleMessage('en-US', en); 
    vm.$i18n.setLocaleMessage('ja-JP', jp); 
    console.log(vm.$i18n);
  },
  render: h => h(App),
}).$mount('#app')


