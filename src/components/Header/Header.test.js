import React from 'react'
import { render, screen } from '../../../utils/test-utils'

import Header from '.'

describe('<Header />', () => {
	it('should render the logo', () => {
		render(<Header />)
		expect(screen.getByText('Multi B')).toBeInTheDocument()
	})
})
