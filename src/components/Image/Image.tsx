import React from "react";
import styled from "styled-components";
import { ImageSize, ImageSizeType } from "../../foundation/Image";
import { radius } from "../../tokens";

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: ImageSizeType;
  imgUrl: string;
  alt?: string;
}

const StyledImage = styled.img<{
  size: ImageSizeType;
}>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: ${(props) => {
    switch (props.size) {
      case ImageSize.XS:
      case ImageSize.S:
      case ImageSize.M:
      case ImageSize.L:
        return radius["radius-xs"];

      case ImageSize.XL:
      case ImageSize["2XL"]:
      case ImageSize["3XL"]:
      case ImageSize["4XL"]:
      case ImageSize["5XL"]:
        return radius["radius-sm"];

      default:
        return radius["radius-xs"];
    }
  }};
`;

export const Image: React.FC<ImageProps> = ({
  size = ImageSize.M,
  imgUrl = "",
  alt = "Image",
  ...rest
}) => {
  return (
    <>
      <StyledImage src={imgUrl} alt={alt} size={size} {...rest} />
    </>
  );
};
