export const nativeFontSizes = {
  smallest: 12,
  smaller: 13,
  small: 14,
  medium: 16,
  semiLarge: 18,
  large: 22,
  larger: 26,
  largest: 30
};

export default {
  family: {
    heading: 'Inter',
    headingBold: 'Inter-Bold',
    body: 'Inter',
    bodyBold: 'Inter-Bold'
  },
  size: {
    smallest: `${nativeFontSizes.smallest}px`,
    smaller: `${nativeFontSizes.smaller}px`,
    small: `${nativeFontSizes.small}px`,
    medium: `${nativeFontSizes.medium}px`,
    semiLarge: `${nativeFontSizes.semiLarge}px`,
    large: `${nativeFontSizes.large}px`,
    larger: `${nativeFontSizes.larger}px`,
    largest: `${nativeFontSizes.largest}px`,
  },
  lineHeight: {
    small: 1.2,
    medium: 1.4,
    large: 1.6,
  }
};
