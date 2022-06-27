import PropTypes from 'prop-types'
import React from 'react'

function StatusReceived({ name }) {
	let bg
	switch (name) {
		case 'Pagamento aprovado':
			bg = 'green-100'
			break
		case 'Aguardando pagamento':
			bg = 'gray-100'
			break
		default:
			bg = 'gray-100'
	}
	return (
		<span
			className={`px-3 inline-flex
            text-xs
            leading-7
            font-semibold
            rounded-full
            bg-${bg}
            text-green-800`}
		>
			{name}
		</span>
	)
}
StatusReceived.propTypes = {
	name: PropTypes.string
}

export default StatusReceived
