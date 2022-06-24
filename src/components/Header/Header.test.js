// import React from 'react'
// import { render } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
// import Header from '.'

import { render, screen } from '../../../utils/test-utils'

import Header from '.'

describe('<Header />', () => {
	it('should render the heading', () => {
		render(<Header />)

		expect(screen.getByText('Header')).toBeInTheDocument()
	})
})

// it('should render Header', () => {
// 	const { getByText } = render(<Header />)
// 	expect(getByText('Header')).toBeInTheDocument()
// })
