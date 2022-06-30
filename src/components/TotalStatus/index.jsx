import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import convertNumberToBrl from '../../../utils/convertNumberToBrl'

function TotalStatus({ wishList }) {
	const sumAllValues = wishList
		.map((item) => item.value)
		.reduce((prev, curr) => prev + curr, 0)

	const [totalValues, setTotalValues] = useState(0)

	useEffect(() => {
		setTotalValues(convertNumberToBrl(sumAllValues))
	}, [totalValues])

	return (
		<div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-2 mt-10">
			<div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
				<div className="p-4 flex items-center">
					<div className="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
						<svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
							<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
						</svg>
					</div>
					<div>
						<p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
							Total de pedidos
						</p>
						<p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
							{wishList.length}
						</p>
					</div>
				</div>
			</div>
			<div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
				<div className="p-4 flex items-center">
					<div className="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4">
						<svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
							<path
								fillRule="evenodd"
								d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div>
						<p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
							Total a receber
						</p>
						<p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
							{totalValues}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
TotalStatus.propTypes = {
	wishList: PropTypes.array
}
export default TotalStatus
