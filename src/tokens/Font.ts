const fontBase = {
  fontFamily: "Pretendard",
  fontStyle: "normal",
  lineHeight: "130%",
};

const fontSize = {
  xs: "12px", // label4
  sm: "13px", // label3
  base: "14px", // label2
  lg: "16px", // label1
  xl: "18px", // body3
  "2xl": "20px", // body2
  "3xl": "22px", // body1
  "4xl": "24px", // header3
  "5xl": "26px", // header2
  "6xl": "28px", // header1
  "7xl": "32px", // title_semiBold, title_bold2
  "8xl": "36px", // title_bold1
};

const fontWeight = {
  regular: 400,
  semiBold: 600,
  bold: 700,
};

const createFontStyle = (size: string, weight: number) => ({
  ...fontBase,
  fontSize: size,
  fontWeight: weight,
});

export const Font = Object.freeze({
  title: {
    title_bold1: createFontStyle(fontSize["8xl"], fontWeight.bold),
    title_bold2: createFontStyle(fontSize["7xl"], fontWeight.bold),
    title_semiBold: createFontStyle(fontSize["7xl"], fontWeight.semiBold),
  },
  header: {
    header1_semiBold: createFontStyle(fontSize["6xl"], fontWeight.semiBold),
    header1_Regular: createFontStyle(fontSize["6xl"], fontWeight.regular),
    header2_semiBold: createFontStyle(fontSize["5xl"], fontWeight.semiBold),
    header2_Regular: createFontStyle(fontSize["5xl"], fontWeight.regular),
    header3_semiBold: createFontStyle(fontSize["4xl"], fontWeight.semiBold),
    header3_Regular: createFontStyle(fontSize["4xl"], fontWeight.regular),
  },
  body: {
    body1_semiBold: createFontStyle(fontSize["3xl"], fontWeight.semiBold),
    body1_Regular: createFontStyle(fontSize["3xl"], fontWeight.regular),
    body2_semiBold: createFontStyle(fontSize["2xl"], fontWeight.semiBold),
    body2_Regular: createFontStyle(fontSize["2xl"], fontWeight.regular),
    body3_semiBold: createFontStyle(fontSize.xl, fontWeight.semiBold),
    body3_Regular: createFontStyle(fontSize.xl, fontWeight.regular),
  },
  label: {
    label1_semiBold: createFontStyle(fontSize.lg, fontWeight.semiBold),
    label1_Regular: createFontStyle(fontSize.lg, fontWeight.regular),
    label2_semiBold: createFontStyle(fontSize.base, fontWeight.semiBold),
    label2_Regular: createFontStyle(fontSize.base, fontWeight.regular),
    label3_semiBold: createFontStyle(fontSize.sm, fontWeight.semiBold),
    label3_Regular: createFontStyle(fontSize.sm, fontWeight.regular),
    label4_semiBold: createFontStyle(fontSize.xs, fontWeight.semiBold),
    label4_Regular: createFontStyle(fontSize.xs, fontWeight.regular),
  },
  get: (
    size: keyof typeof fontSize,
    weight: keyof typeof fontWeight = "regular",
  ) => createFontStyle(fontSize[size], fontWeight[weight]),
});
