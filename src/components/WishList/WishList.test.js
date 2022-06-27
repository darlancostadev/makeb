import React from 'react'
import { render, screen, fireEvent } from '../../../utils/test-utils'

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
		render(<WishList wishList={wishList[0]} />)
		expect(screen.queryByTestId(/StatusReceived/i))
		expect(screen.getByText('123abc'))
		expect(screen.getByText('R$ 120'))
		expect(screen.getByText('2020-08-03 01:00:00'))
		expect(screen.getByText('Ver todos os status'))
	})
	it('should display all statuses of the selected order', async () => {
		render(<WishList wishList={wishList[0]} />)
		const button = screen.getByText('Ver todos os status')
		await fireEvent.click(button)
		expect(screen.queryAllByText('2020-08-01 01:00:00'))
	})
})
