import {CustomThemeColorRanges} from "../theme/styled";

export const lumiance = (hex: string, luminosity: number) => {
  
  /* Captura elementos que não (^) são 0-9 ou a-f e Global Ignore (gi) IGNORA CASE  */
  hex = hex.replace(/[^0-9a-f]/gi,'');
  
  const isValidHex = hex.length === 6 || hex.length === 3;
  
  // if(!isValidHex) throw new Error('Invalid HEX');
  if(!isValidHex){
    return "#000";
  }
  
  if(hex.length === 3){
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  
  const white = 255;
  const black = 0;
  
  /* Captura elementos hex agrupados em 2 e colocando em array[] */
  const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi);
  
  let newHexColor = "#";
  
  if(twoDigitGroup){
    for( const twoDigit of twoDigitGroup){
      
      const hexToNumber = parseInt(twoDigit, 16); /* Converter hexadecimal para inteiro */
      const calculateLuminosity = hexToNumber + (luminosity * white);
      
      const blackOrLuminosity = Math.max(black, calculateLuminosity); /* Maior que 0 ou cor */
      const partialColor = Math.min(white, blackOrLuminosity); /* Menor que 255 ou cor */
      
      /* Arredondar */
      const newColor = Math.round(partialColor);
  
      /* Convertendo de volta para a base 16 */
      const numberToHex = newColor.toString(16);
  
      /* Adiciona o 0 caso falte caracteres na conversão */
      const finalHex = `0${numberToHex}`;
  
      /* Dividindo em fatias de 2 de trás pra frente, possibilitando a sobra do zero extra */
      newHexColor = newHexColor + finalHex.slice(-2);
    }
  }
  
  return newHexColor;
};

/**
 * Retorna variações de iluminação da cor informada
 * @param color cor base
 * @param isExtended adicionar variação mais escura e mais clara
 */
export const getColorThemeRange = (color: string, isExtended?: boolean): CustomThemeColorRanges => {
  return {
    0: isExtended ? lumiance(color, 0) : null,
    50: lumiance(color, 0.1),
    100: lumiance(color, 0.2),
    200: lumiance(color, 0.4),
    300: lumiance(color, 0.6),
    400: lumiance(color, 0.8),
    500: lumiance(color, 1),
    600: lumiance(color, 1.2),
    700: lumiance(color, 1.4),
    800: lumiance(color, 1.6),
    900: lumiance(color, 1.8),
    950: isExtended ? lumiance(color, 1.9) : null,
  };
};
