import React, { useState } from 'react'
import Base from '../components/Base'
import { registerOrder } from '../clients/backend'
import { useForm } from 'react-hook-form'

export default function CreateOrder() {
	const [successMenssage, setSuccessMenssage] = useState(false)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm()

	const onSubmit = async (data) => {
		await registerOrder(data)
		setSuccessMenssage(true)
		reset()
		setTimeout(() => {
			setSuccessMenssage(false)
		}, 2000)
	}
	return (
		<Base>
			<main className="bg-gray-100 h-screen">
				<div className="container flex justify-center items-center px-6 mx-auto">
					<div className="lg:w-1/2 sm:w-full overflow-hidden rounded-lg shadow-xs mt-12">
						<div className="rounded-lg text-xs font-semibold tracking-wide text-left text-gray-500 border-b bg-gray-50 p-10">
							<>
								<h1 className="text-lg mb-2">Criar Pedido</h1>

								<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
									<div className="flex flex-wrap -mx-3 mb-6">
										<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
											<label
												className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
												htmlFor="orderId"
											>
												Order ID
											</label>
											<input
												className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
												id="orderId"
												type="text"
												placeholder="Informe o Order ID"
												onChange={() => setSuccessMenssage(false)}
												{...register('orderId', { required: true })}
											/>
											{errors.orderId && (
												<p className="text-red-500 text-xs italic">
													Esse campo é obrigatório!
												</p>
											)}
										</div>
										<div className="w-full md:w-1/2 px-3">
											<label
												className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
												htmlFor="value"
											>
												Valor
											</label>
											<input
												className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
												id="value"
												type="number"
												placeholder="Informe o valor do pedido"
												{...register('value', {
													required: true,
													valueAsNumber: true
												})}
											/>

											{errors.value && (
												<p className="text-red-500 text-xs italic">
													Esse campo é obrigatório!
												</p>
											)}
										</div>
									</div>
									<div className="flex flex-wrap -mx-3 mb-2">
										<div className="w-full px-3 mb-6 md:mb-0">
											<label
												className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
												htmlFor="name"
											>
												Informe o status atual
											</label>
											<div className="relative">
												<select
													className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
													id="name"
													{...register('name', { required: true })}
												>
													<option>Aguardando pagamento</option>
													<option>Pagamento aprovado</option>
													<option>Preparando pedido</option>
												</select>
												<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
													<svg
														className="fill-current h-4 w-4"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
													>
														<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
													</svg>
												</div>
											</div>
											<div className="w-full md:w-1/2 mt-3">
												<div className="md:w-1/3"></div>
												<div className="md:w-2/3">
													<button
														className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
														type="submit"
													>
														Cadastrar
													</button>
												</div>
											</div>
										</div>
									</div>
								</form>
							</>
							{successMenssage && (
								<>
									<p className="text-green-500 text-xs italic">
										Pedido criado com sucesso!
									</p>
								</>
							)}
						</div>
					</div>
				</div>
			</main>
		</Base>
	)
}
