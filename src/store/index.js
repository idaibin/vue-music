/*
* @Author: daibin
* @Date:   2017-06-03 12:18:39
* @Last Modified by:   daibin
* @Last Modified time: 2017-06-03 12:35:16
*/

'use strict'
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})