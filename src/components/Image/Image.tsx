import React from "react";
import styled from "styled-components";
import { ImageSize as EnumImageSize } from "../../foundation/Image";
import { image, radius } from "../../tokens";

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: EnumImageSize;
  imgUrl: string;
}

const getSizeValue = (size: EnumImageSize): string => {
  switch (size) {
    case EnumImageSize.XS:
      return image["image-xs"];
    case EnumImageSize.S:
      return image["image-sm"];
    case EnumImageSize.M:
      return image["image-md"];
    case EnumImageSize.L:
      return image["image-lg"];
    case EnumImageSize.XL:
      return image["image-xl"];
    case EnumImageSize["2XL"]:
      return image["image-2xl"];
    case EnumImageSize["3XL"]:
      return image["image-3xl"];
    case EnumImageSize["4XL"]:
      return image["image-4xl"];
    case EnumImageSize["5XL"]:
      return image["image-5xl"];
    default:
      return image["image-md"];
  }
};

const StyledImage = styled.img<{
  size: EnumImageSize;
}>`
  width: ${(props) => getSizeValue(props.size)};
  height: ${(props) => getSizeValue(props.size)};
  border-radius: ${(props) => {
    switch (props.size) {
      case EnumImageSize.XS:
      case EnumImageSize.S:
      case EnumImageSize.M:
      case EnumImageSize.L:
        return radius["radius-xs"];

      case EnumImageSize.XL:
      case EnumImageSize["2XL"]:
      case EnumImageSize["3XL"]:
      case EnumImageSize["4XL"]:
      case EnumImageSize["5XL"]:
        return radius["radius-sm"];

      default:
        return radius["radius-xs"];
    }
  }};
`;

export const Image: React.FC<ImageProps> = ({
  size = EnumImageSize.M,
  imgUrl = "",
  ...rest
}) => {
  return (
    <>
      <StyledImage src={imgUrl} alt="Image" size={size} {...rest} />
    </>
  );
};
