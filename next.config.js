const config = require('config')

module.exports = {
	serverRuntimeConfig: {
		MULTIB_URL: config.get('MULTIB_URL')
	},
	publicRuntimeConfig: {},
	api: {
		externalResolver: true
	}
}
