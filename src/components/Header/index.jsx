import React from 'react'
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/outline'

export default function Header() {
	return (
		<div className="bg-gray-100">
			<div className="container grid px-6 mx-auto rounded-lg pt-10">
				<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 rounded-lg">
					<div className="flex w-full justify-between items-center flex-shrink-0 text-white">
						<Link href="/" passHref>
							<a>
								<span className="font-semibold text-xl tracking-tight">
									Multi B
								</span>
							</a>
						</Link>
						<span className="sm:ml-3 items-right">
							<Link href="/criar-pedido" passHref>
								<a
									type="button"
									className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									<PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
									Criar pedido
								</a>
							</Link>
						</span>
					</div>
				</nav>
			</div>
		</div>
	)
}
