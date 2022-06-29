import { parseISO, format } from 'date-fns'

import ptBR from 'date-fns/locale/pt-BR'

export default function formatDateToPtBr(date) {
	const dataParser = parseISO(date)
	return format(dataParser, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {
		locale: ptBR
	})
}
