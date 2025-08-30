import { Font, inputWidth, inputHeight } from "@tokens";
import { InputSize } from "./InputSize";

export const InputSizeMap: Record<
  InputSize,
  {
    width: string;
    height: string;
    font: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      fontStyle: string;
      lineHeight: string;
    };
  }
> = {
  [InputSize.S]: {
    width: inputWidth["input-sm"],
    height: inputHeight["input-sm"],
    font: Font.label.label4_semiBold,
  },
  [InputSize.M]: {
    width: inputWidth["input-md"],
    height: inputHeight["input-md"],
    font: Font.label.label2_semiBold,
  },
  [InputSize.L]: {
    width: inputWidth["input-lg"],
    height: inputHeight["input-lg"],
    font: Font.label.label1_semiBold,
  },
};
