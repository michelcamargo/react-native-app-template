type CustomThemeColorRanges = {
    0?: string,
    50:  string
    100: string,
    200: string,
    300: string,
    400: string,
    500: string
    600: string,
    700: string,
    800: string,
    900: string,
    950?: string
}

export type CustomThemeColors = {
    primary: CustomThemeColorRanges,
    secondary: CustomThemeColorRanges,
    tertiary: CustomThemeColorRanges,
    error: CustomThemeColorRanges,
    success: CustomThemeColorRanges,
    warning: CustomThemeColorRanges,
    info: CustomThemeColorRanges,
    light: CustomThemeColorRanges,
    background: {
        primary: string,
        primaryInverted: string,
        secondary: string,
        secondaryInverted: string,
    },
}

export type CustomThemeTypography = {
    family: {
        heading: string,
        headingBold: string,
        body: string,
        bodyBold: string
    },
    size: {
        smallest: string,
        smaller: string,
        small: string,
        medium: string,
        semiLarge: string,
        large: string,
        larger: string,
        largest: string,
    },
    lineHeight: {
        small: number,
        medium: number,
        large: number,
    }
}

export type CustomThemeScreen = {
    width: string,
    height: string,
    containerWidth: string,
};

export type CustomThemeSpacing = {
    smallest: string,
    smaller: string,
    small: string,
    medium: string,
    large: string,
    larger: string,
    largest: string,
};

export type CustomThemeRadius = {
    smallest: string,
    small: string,
    medium: string,
    large: string,
    largest: string,
    rounded: string,
};

export type CustomThemeShadow = {
    boxLight: string,
};

// tipagem do tema
export type CustomTheme = {
    key: string,
    colors: CustomThemeColors,
    typography: CustomThemeTypography,
    screen: CustomThemeScreen,
    spacing: CustomThemeSpacing,
    radius: CustomThemeRadius,
    shadow: CustomThemeShadow,
}
