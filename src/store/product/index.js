import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

const initialState = {
	products : [],
	category : []
}

export default {
	state : {...initialState},
	getters,
	actions,
	mutations
}
