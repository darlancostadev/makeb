import React from 'react'
import { render, screen } from '../../../utils/test-utils'
import wishList from '../../../mocks/wishList.json'

import TotalStatus from '.'

describe('<TotalStatus />', () => {
	it('should render payment approved status', () => {
		render(<TotalStatus wishList={wishList} />)
		expect(screen.getByText('Total de pedidos'))
		expect(screen.getByText('3'))
	})
})
