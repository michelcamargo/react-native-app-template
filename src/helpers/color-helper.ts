import { CustomThemeColorRanges } from "../theme/styled";

export const lumiance = (hex: string, luminosity: number) => {
  
  // Validar a entrada
  if (hex?.length !== 7 || !/^#[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error('A cor hexadecimal deve ter o formato "#RRGGBB".');
  }
  
  if (luminosity < -1 || luminosity > 1) {
    throw new Error('A luminosidade deve estar no intervalo de -1 a 1.');
  }
  
  // Remover o símbolo '#' e converter para valores RGB
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  
  // Função auxiliar para ajustar um canal de cor individual
  const adjustChannel = (channel: number): number => {
    let adjusted = Math.round(channel + channel * luminosity);
    if (adjusted < 0) {
      adjusted = 0;
    } else if (adjusted > 255) {
      adjusted = 255;
    }
    return adjusted;
  };
  
  // Ajustar os canais de cor RGB
  const adjustedR = adjustChannel(r);
  const adjustedG = adjustChannel(g);
  const adjustedB = adjustChannel(b);
  
  // Converter os canais ajustados de volta para uma cor hexadecimal
  const adjustedHex = `#${adjustedR.toString(16).padStart(2, '0')}${adjustedG.toString(16).padStart(2, '0')}${adjustedB
    .toString(16).padStart(2, '0')}`;
  
  return adjustedHex;
};

/**
 * Retorna variações de iluminação da cor informada
 * @param color cor base
 * @param isExtended adicionar variação mais escura e mais clara
 */
export const getColorThemeRange = (color: string, isExtended?: boolean): CustomThemeColorRanges => {
  return {
    0: isExtended ? lumiance(color, -1) : null,
    50: lumiance(color, -0.9),
    100: lumiance(color, -0.8),
    200: lumiance(color, -0.6),
    300: lumiance(color, -0.4),
    400: lumiance(color, -0.2),
    500: lumiance(color, 0),
    600: lumiance(color, 0.2),
    700: lumiance(color, 0.4),
    800: lumiance(color, 0.6),
    900: lumiance(color, 0.8),
    950: isExtended ? lumiance(color, 1) : null,
  };
};

export const isBackgroundColorDark = (hexColor: string): boolean => {
  // Validar a entrada
  if (hexColor?.length !== 7 || !/^#[0-9A-Fa-f]{6}$/.test(hexColor)) {
    throw new Error('A cor hexadecimal deve ter o formato "#RRGGBB".');
  }
  
  // Remover o símbolo '#' e converter para valores RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  
  // Calcular o valor de luminosidade usando a fórmula de YIQ
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  
  // Determinar se a cor de fundo é escura ou clara com base no valor de luminosidade
  return yiq < 128; // Você pode ajustar este limite conforme necessário
};
