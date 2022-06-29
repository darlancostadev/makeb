import PropTypes from 'prop-types'
import React from 'react'

function StatusReceived({ name }) {
	let bg
	switch (name) {
		case 'Preparando pedido':
			bg = 'bg-sky-300'
			break
		case 'Pagamento aprovado':
			bg = 'bg-green-300'
			break
		case 'Aguardando pagamento':
			bg = 'bg-gray-300'
			break
		default:
			bg = 'bg-gray-300'
	}
	return (
		<>
			<span
				className={`px-3 inline-flex
            text-xs
            leading-7
            font-semibold
            rounded-full
            ${bg}
            text-inherit`}
			>
				{name}
			</span>
		</>
	)
}
StatusReceived.propTypes = {
	name: PropTypes.string
}

export default StatusReceived
