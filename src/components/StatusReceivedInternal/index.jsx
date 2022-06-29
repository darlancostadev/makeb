import PropTypes from 'prop-types'
import React from 'react'
import {
	CheckIcon,
	DotsHorizontalIcon,
	ShoppingBagIcon
} from '@heroicons/react/outline'

function StatusReceived({ name }) {
	let bg
	let icon
	switch (name) {
		case 'Preparando pedido':
			;(bg = 'bg-sky-300'),
				(icon = <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />)
			break
		case 'Pagamento aprovado':
			;(bg = 'bg-green-300'),
				(icon = <CheckIcon className="h-6 w-6" aria-hidden="true" />)
			break
		case 'Aguardando pagamento':
			;(bg = 'bg-gray-300'),
				(icon = <DotsHorizontalIcon className="h-6 w-6" aria-hidden="true" />)
			break
		default:
			bg = 'bg-gray-300'
	}
	return (
		<>
			<div
				className={`absolute flex items-center justify-center h-12 w-12 rounded-md ${bg}`}
				data-testid={name}
			>
				{icon}
			</div>
			<p className="ml-16 text-sm leading-4 font-medium text-gray-900">
				{name}
			</p>
		</>
	)
}
StatusReceived.propTypes = {
	name: PropTypes.string
}

export default StatusReceived
