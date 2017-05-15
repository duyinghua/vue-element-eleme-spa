import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex);

const state = {
    items: [],　// items 为元素列表 ,
    fetch: 0　// num
}
export default new Vuex.Store({
    state,          //状态对象                         ---对应computed   this.$store.state.xxx
    mutations,      //同步~方法/事件 用于改变状态对象     ---对应method     this.$store.commit(xxx)
    actions,        //异步~需触发mutations              ---对应method     this.$store.dispatch(xxx)
    getters         //状态对象展示前的处理器             ---对应computed    this.$store.getters.xxx
})