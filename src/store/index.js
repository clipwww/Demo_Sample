import Vue from 'vue'
import Vuex from 'vuex'
//root
import * as getters from './getters.js'

//modules
import count from './modules/count.js';
import todo from './modules/todo.js';
import shop from './modules/shop.js';

Vue.use(Vuex);


export default new Vuex.Store({
    getters: getters,
    modules: {
        count: count,
        todo: todo,
        shop: shop
    },
    // 嚴格模式，禁止直接修改 state
    strict: true
});