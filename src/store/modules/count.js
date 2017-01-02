import * as types from '../mutations_type.js'

// count state 必須是 Object
const state = {
    count: 0
}

// getters 也可以整理到這邊直接返回 count 內容
const getters = {
    getCount: state => state.count
}

// actions 也是以 Object 形式建構。
const actions = {
    actionIncrease({ commit }, num) {
        commit(types.INCREASE, num);
    },
    actionDecrease({ commit }, num) {
        commit(types.DECREASE, num);
    },
    actionCountReset({ commit }) {
        commit(types.COUNT_RESET);
    }
}

// mutations
const mutations = {
    [types.INCREASE](state, num) {
        state.count += num;
        console.log('newINCREASE', num, 'state?', state.count);
    },
    [types.DECREASE](state, num) {
        state.count -= num;
        console.log('newDECREASE', num, 'state?', state.count);
    },
    [types.COUNT_RESET](state) {
        state.count = 0;
        console.log('newCOUNT_RESET - state?', state.count);
    }
}

/*
  因為我們把 vuex 所有職權都寫在同一隻檔案，
  所以必須要 export 出去給最外層 index.js 組合使用
*/
export default {
    state,
    getters,
    actions,
    mutations
}