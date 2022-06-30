const colors = require('tailwindcss/colors')
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				kramp: {
					100: '#F7E6E6',
					200: '#EBBFC0',
					300: '#DF9999',
					400: '#C64D4D',
					500: '#AE0001',
					600: '#9D0001',
					700: '#680001',
					800: '#4E0000',
					900: '#340000'
				}
			}
		}
	},
	plugins: []
}
