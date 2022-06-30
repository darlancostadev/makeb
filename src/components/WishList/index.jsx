import PropTypes from 'prop-types'
import React from 'react'
import StatusReceived from '../StatusReceived'
import convertNumberToBrl from '../../../utils/convertNumberToBrl'
import formatDateToPtBr from '../../../utils/formatDateToPtBr'
import Link from 'next/link'
function WishList({ orderId, value, name, createdAt }) {
	return (
		<>
			<tr>
				<td className="px-4 py-3">
					<div className="flex items-center text-sm">
						<div>
							<p className="font-semibold">{orderId}</p>
						</div>
					</div>
				</td>
				<td className="px-4 py-3">
					<span className="text-sm">{convertNumberToBrl(value)}</span>
				</td>
				<td className="px-4 py-3">
					<StatusReceived name={name} />
				</td>
				<td className="px-4 py-3">
					<span className="text-sm">{formatDateToPtBr(createdAt)}</span>
				</td>
				<td>
					<Link href={`/${orderId}`}>
						<a className="btn-copy-code text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 text-sm px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
							Ver detalhes
						</a>
					</Link>
				</td>
			</tr>
		</>
	)
}

WishList.propTypes = {
	orderId: PropTypes.string,
	value: PropTypes.number,
	name: PropTypes.string,
	createdAt: PropTypes.string
}

export default WishList
