import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import TotalStatus from '../components/TotalStatus'
import WishList from '../components/WishList'
import wishList from '../../mocks/wishList.json'

export default function Home({ wishList }) {
	useEffect(() => {
		setWishListAll(wishList)
	}, [])
	const [wishListAll, setWishListAll] = useState([])
	return (
		<Base>
			<main className="bg-gray-100 h-screen">
				<div className="container grid px-6 mx-auto">
					<TotalStatus wishList={wishListAll} />
					<div className="w-full overflow-hidden rounded-lg shadow-xs">
						<div className="w-full overflow-x-auto">
							<table className="w-full whitespace-no-wrap">
								<thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
									<tr>
										<td className="px-4 py-3">Order ID</td>
										<td className="px-4 py-3">Valor</td>
										<td className="px-4 py-3">Status do pedido</td>
										<td className="px-4 py-3">Data</td>
										<td className="px-4 py-3">+</td>
									</tr>
								</thead>
								<tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
									{wishListAll.map((item, i) => (
										<WishList key={i} wishList={item} />
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</main>
		</Base>
	)
}
export async function getServerSideProps() {
	return {
		props: {
			wishList
		}
	}
}
Home.propTypes = {
	wishList: PropTypes.array.isRequired
}
