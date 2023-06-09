const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",
  lightGray: "#454545",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",

  black: "#000000",
  lightBlack: "#1E1E1E",

  red: "#FF0000",

  green: "#32CD32",

  slider: "#7149C6",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  xmediam: 14,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  xxcustom: 14,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
