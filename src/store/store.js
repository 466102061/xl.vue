import Vue from 'vue'
import Vuex from 'vuex'
import debug from '../config/debug'
import user from './user'
import product from './product'


Vue.use(Vuex)

export default new Vuex.Store({
	strict : debug,
	modules : {
		user,
		product
	}
})
