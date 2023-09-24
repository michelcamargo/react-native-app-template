/**
 * Disponibiliza dados de data e horário formatados
 */
class DateTime {

  /**
	 * Retorna diferença em segundos entre dois objetos data
	 * @param behind Referência de tempo anterior
	 * @param ahead Referência de tempo a frente
	 */
  public static secondsDiff = (behind: Date, ahead: Date) => {
    const diff = Math.abs(behind.getTime() - ahead.getTime()); // Subtrai uma data pela outra
    return Math.ceil(diff / 1000);
  };
	
  /**
	 * Busca dia da semana em extenso
	 * @param dateTime data referência
	 * @param timezoneOffset Base de conversão UTC
	 * @param short Indicador de disposição resumida
	 */
  public static getWeekday = (dateTime: string | Date, timezoneOffset?: number, short?: boolean) => {
    let displayDate = new Date(dateTime);
    if (timezoneOffset) displayDate = DateTime.toUTC(displayDate, timezoneOffset);
		
    const weekdays = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    const shortWeekdays = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
		
    const today = new Date();
		
    if (displayDate.getDate() == today.getDate()) return 'Hoje';
		
    return short ? shortWeekdays[displayDate.getDay()] : weekdays[displayDate.getDay()];
  };
	
  /**
	 * Retorna horário formatado
	 * @param dateTime data referência
	 * @param timezoneOffset Base para conversão UTC
	 * @param showSeconds Indicador de disposição de segundos
	 */
  public static getTime = (dateTime: string | Date, timezoneOffset?: number, showSeconds?: boolean) => {
    let displayDate = new Date(dateTime);
    if (timezoneOffset) displayDate = DateTime.toUTC(displayDate, timezoneOffset);

    let hours = displayDate.getHours().toString();
    hours = hours.padStart(2, '0');
    let minutes = displayDate.getMinutes().toString();
    minutes = minutes.padStart(2, '0');
    let seconds = displayDate.getSeconds().toString();
    seconds = seconds.padStart(2, '0');
		
    return showSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
  };
	
  /**
	 * Retorna data formatada
	 * @param dateTime data referência
	 * @param timezoneOffset Base para conversão de UTC
	 * @param short Indicador de disposição resumida
	 * @param showYear Indicador de disposição de informação ano
	 */
  public static getDate = (dateTime: string | Date, timezoneOffset?: number, short?: boolean, showYear?: boolean) => {
    let displayDate = new Date(dateTime);
    if (timezoneOffset) displayDate = DateTime.toUTC(displayDate, timezoneOffset);
		
    let day = displayDate.getDate().toString();
    day = day.padStart(2, '0');
    const year = displayDate.getDate().toString();
		
    if (short) {
      let month = displayDate.getMonth().toString();
      month = month.padStart(2, '0');
			
      return `${day}/${month}`;
    }
		
    const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
		
    return showYear ? `${day} de ${month[displayDate.getMonth()]} de ${year}` : `${day} de ${month[displayDate.getMonth()]}`;
  };
	
  /**
	 * Retorna data convertida em UTC
	 * @param dateTime
	 * @param offset
	 */
  public static toUTC(dateTime: string | Date, offset: number) {
    const displayDate = new Date(dateTime);
    return new Date(displayDate.setHours(displayDate.getHours() + offset));
  }

}

export default DateTime;

