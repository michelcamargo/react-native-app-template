export const getFloatFromPercent = (percentage: string) => {
  return (parseFloat(percentage)) / 100;
};

/**
 * Calcula variação em porcentagem
 * @param previousValue
 * @param currentValue
 */
export const getPercentVariation = (currentValue: number, previousValue: number) => {
  return Math.floor((1 - currentValue / previousValue) * 100);
};
