export default function convertNumberToBrl(value) {
	const result = value?.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL'
	})
	return result
}
