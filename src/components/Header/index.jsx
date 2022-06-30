import React from 'react'
import Link from 'next/link'

export default function Header() {
	return (
		<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
			<div className="flex items-center flex-shrink-0 text-white">
				<Link href="/" passHref>
					<a>
						<span className="font-semibold text-xl tracking-tight">
							Multi B
						</span>
					</a>
				</Link>
			</div>
		</nav>
	)
}
