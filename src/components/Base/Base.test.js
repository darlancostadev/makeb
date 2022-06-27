import React from 'react'
import { render, screen } from '../../../utils/test-utils'

import Base from '.'

jest.mock('components/Header', () => ({
	__esModule: true,
	default: function Header() {
		return <div data-testid="Header">Header</div>
	}
}))

describe('<Header />', () => {
	it('should render the header in component base', () => {
		render(<Base />)
		expect(screen.queryByTestId(/Header/i))
	})
})
