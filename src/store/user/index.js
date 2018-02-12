import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

const infos = JSON.parse(sessionStorage.getItem('userInfo'))

const initialState = {
	userInfo : {
		name : infos ? infos.name : '',
		phone : infos ? infos.phone : '' 
	}
}

export default {
	state : {...initialState},
	getters,
	actions,
	mutations
}
