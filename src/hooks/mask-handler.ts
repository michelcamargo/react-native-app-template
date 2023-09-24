class MaskHandler {

  /**
	 * Documento tipo Telefone
	 * @param value
	 */
  public static Phone(value: string) {
    let maskedValue = value.replace(/\D/g,"");
    maskedValue = maskedValue.replace(/^(\d{2})(\d)/g,"($1) $2");
    return maskedValue.replace(/(\d)(\d{4})$/,"$1-$2");
  }
	
  /**
	 * Documento tipo CPF ou CNPJ
	 * @param value
	 */
  public static CpfCnpj(value: string) {
    return value;
  }

}

export default MaskHandler;
