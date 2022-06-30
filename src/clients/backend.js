import axios from 'axios'

const instance = axios.create({
	baseURL: '/'
})

export const registerOrder = async (order) => {
	//console.log('order', order)
	try {
		const response = await instance.post('api/order', order)
		return response.data
	} catch (e) {
		if (e.response && e.response.data) {
			return e.response.data
		}
		throw e
	}
}
