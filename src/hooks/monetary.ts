/**
 * Retorna valor convertido em BRL
 * @param value
 */
export const getBRLValue = (value: number) => {
  console.log(value);

  if(value) {
    console.log('value', value);
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  }

  return value;
};
