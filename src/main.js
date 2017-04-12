import Vue from 'vue'
import router from './router/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './css/common.css'
import store from './store/'

Vue.use(ElementUI);

new Vue({
    router,
    store,
    el: '#app',
    components: {ElementUI},
    created: function () {
    }
});
