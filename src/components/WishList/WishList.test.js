import React from 'react'
import { render, screen } from '../../../utils/test-utils'

import WishList from '.'
import wishList from '../../../mocks/wishList.json'

jest.mock('components/StatusReceived', () => ({
	__esModule: true,
	default: function StatusReceived() {
		return <div data-testid="StatusReceived">StatusReceived</div>
	}
}))

describe('<WishList />', () => {
	it('should render the header in component base', () => {
		render(<WishList {...wishList[0]} />)
		expect(screen.queryByTestId(/StatusReceived/i))
		expect(screen.getByText('123abc'))
		expect(screen.getByText('R$ 100.00'))
		expect(screen.getByText('Ver detalhes'))
	})
})
