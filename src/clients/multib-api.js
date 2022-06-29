import axios from 'axios'
import getConfig from 'next/config'

const {
	serverRuntimeConfig: { MULTIB_URL }
} = getConfig()

const instance = axios.create({
	baseURL: MULTIB_URL
})

export const getAllOrders = async () => {
	const { data: policies } = await instance.get(`/status`)
	return policies
}
export const getOrderByOrderId = async (orderId) => {
	const { data: policies } = await instance.get(`/status/${orderId}`)
	return policies
}
