import PropTypes from 'prop-types'
import React, { useState } from 'react'
import StatusReceived from '../StatusReceived'
import valueFormatted from '../../../utils/convertNumberToBrl'

function WishList({ wishList }) {
	const [openStatus, setOpenStatus] = useState(false)
	return (
		<>
			<tr>
				<td className="px-4 py-3">
					<div className="flex items-center text-sm">
						<div>
							<p className="font-semibold">{wishList.orderId}</p>
						</div>
					</div>
				</td>
				<td className="px-4 py-3">
					<span className="text-sm">{valueFormatted(wishList.value)}</span>
				</td>
				<td className="px-4 py-3">
					<StatusReceived name={wishList.status[0].name} />
				</td>
				<td className="px-4 py-3">
					<span className="text-sm">{wishList.createdAt}</span>
				</td>
				<td>
					{wishList.status.length > 1 && (
						<>
							<button
								onClick={() => setOpenStatus(!openStatus)}
								className="btn-copy-code text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 text-sm px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							>
								Ver todos os status
							</button>
						</>
					)}
				</td>
			</tr>
			{openStatus && wishList.status.length >= 1 && (
				<>
					{wishList.status.slice(1).map((item) => (
						<tr key={item._id} className="bg-gray-200">
							<td className="px-4 py-3">
								<div className="flex items-center text-sm">
									<div>
										<p className="font-semibold">{wishList.orderId}</p>
									</div>
								</div>
							</td>
							<td className="px-4 py-3">
								<span className="text-sm">
									{valueFormatted(wishList.value)}
								</span>
							</td>
							<td className="px-4 py-3">
								<StatusReceived name={item.name} />
							</td>
							<td className="px-4 py-3">
								<span className="text-sm">{item.createdAt}</span>
							</td>
							<td></td>
						</tr>
					))}
				</>
			)}
		</>
	)
}

WishList.propTypes = {
	wishList: PropTypes.object
}

export default WishList
