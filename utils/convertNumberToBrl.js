export default function valueFormatted(value) {
	const result = value.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL'
	})
	return result
}
