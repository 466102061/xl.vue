import {
	PRODUCT_LIST,
	PRODUCT_CATEGORY
} from './mutationType'

export default {
	[PRODUCT_LIST] (state, data) {
		state.products = data
	},
	[PRODUCT_CATEGORY] (state, category) {
		state.category = category
	}
}
