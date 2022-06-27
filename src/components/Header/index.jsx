import React from 'react'

export default function Header() {
	return (
		<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
			<div className="flex items-center flex-shrink-0 text-white">
				<span className="font-semibold text-xl tracking-tight">Multi B</span>
			</div>
			<div className="container grid mx-auto">
				<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
					<div className="text-sm lg:flex-grow">
						<a
							href="#responsive-header"
							className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
						>
							Docs
						</a>
						<a
							href="#responsive-header"
							className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
						>
							Examples
						</a>
						<a
							href="#responsive-header"
							className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
						>
							Blog
						</a>
					</div>
				</div>
			</div>
		</nav>
	)
}
