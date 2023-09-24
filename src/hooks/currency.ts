import { formatNumber } from "react-native-currency-input";
import { FormatNumberOptions } from "react-native-currency-input/lib/typescript/src/props";

const currencyFormatOptions: FormatNumberOptions = {
  separator: ',',
  prefix: 'R$ ',
  precision: 2,
  delimiter: '.',
  signPosition: 'beforePrefix',
};

/**
 * Utilitário para conversão de strings em valores monetários
 * Atualmente usando apenas o padrão BRL
 * Ideal: utilizar dados monetários de API
 */
class Currency {

  /**
   * Retorna valor convertido em BRL
   * @param value
   * @param isFormatted
   */
  public static getBRLValue = (value: number, isFormatted?: boolean) => {
    return formatNumber(isFormatted ? value : value / 100, currencyFormatOptions);
  };
  
} export default Currency;
