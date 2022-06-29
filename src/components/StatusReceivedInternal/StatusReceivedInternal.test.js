import React from 'react'
import { render, screen } from '../../../utils/test-utils'

import StatusReceivedInternal from '.'

describe('<StatusReceivedInternal />', () => {
	it('should render preparing order status', () => {
		render(<StatusReceivedInternal name="Preparando pedido" />)
		const status = screen.getByText('Preparando pedido')
		expect(status)
		expect(screen.getByTestId('Preparando pedido')).toHaveClass('bg-sky-300')
	})
	it('should render payment approved status', () => {
		render(<StatusReceivedInternal name="Pagamento aprovado" />)
		const status = screen.getByText('Pagamento aprovado')
		expect(status)
		expect(screen.getByTestId('Pagamento aprovado')).toHaveClass('bg-green-300')
	})
	it('should render the status of awaiting payment', () => {
		render(<StatusReceivedInternal name="Aguardando pagamento" />)
		const status = screen.getByText('Aguardando pagamento')
		expect(status)
		expect(screen.getByTestId('Aguardando pagamento')).toHaveClass(
			'bg-gray-300'
		)
	})
	it('should render unknown status with gray color', () => {
		render(<StatusReceivedInternal name="Status desconhecido" />)
		const status = screen.getByText('Status desconhecido')
		expect(status)
		expect(screen.getByTestId('Status desconhecido')).toHaveClass('bg-gray-300')
	})
})
