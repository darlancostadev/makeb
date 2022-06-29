import PropTypes from 'prop-types'
import React from 'react'
import Base from '../components/Base'
import { getOrderByOrderId } from '../clients/multib-api'
import StatusReceivedInternal from '../components/StatusReceivedInternal'
import formatDateToPtBr from '../../utils/formatDateToPtBr'
import { CalendarIcon } from '@heroicons/react/outline'

export default function OrderId({ orderId, status, createdAt }) {
	return (
		<Base>
			<main className="bg-gray-100 h-screen">
				<div className="container flex justify-center items-center px-6 mx-auto">
					<div className="lg:w-1/2 sm:w-full overflow-hidden rounded-lg shadow-xs mt-12">
						<div className="rounded-lg text-xs font-semibold tracking-wide text-left text-gray-500 border-b bg-gray-50 p-10">
							<h1 className="text-lg mb-2">Detalhes order Id: {orderId}</h1>
							<h3 className="text-sm mb-2">
								<CalendarIcon className="h-5 w-5 inline" aria-hidden="true" />{' '}
								{formatDateToPtBr(createdAt)}
							</h3>
							<p className="text-md mb-2">Ultimos status:</p>
							<dl className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
								{status.map((item, i) => (
									<div key={i} className="relative">
										<dt>
											<StatusReceivedInternal name={item.name} />
										</dt>
										<dd className="mt-2 ml-16 text-sm text-gray-500">
											{formatDateToPtBr(item.createdAt)}
										</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
				</div>
			</main>
		</Base>
	)
}
export async function getServerSideProps({ params }) {
	const wishList = await getOrderByOrderId(params.orderId)
	return {
		props: {
			...wishList
		}
	}
}
OrderId.propTypes = {
	createdAt: PropTypes.string,
	status: PropTypes.array,
	orderId: PropTypes.string
}
