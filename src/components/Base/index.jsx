import PropTypes from 'prop-types'
import React from 'react'
import Header from '../../components/Header'

function Base({ children }) {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

Base.propTypes = {
	children: PropTypes.any
}

export default Base
