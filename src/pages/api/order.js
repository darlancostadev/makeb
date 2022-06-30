import { createOrder } from '../../clients/multib-api'

export default async function reward(req, res) {
	try {
		const orderBody = req.body

		const registerOrder = await createOrder(orderBody)
		if (registerOrder) {
			res.send(registerOrder)
			return
		}
		res.status(404).end()
	} catch (error) {
		res.status(error.status || 400).end(error.message)
	}
}
