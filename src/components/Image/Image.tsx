import React from "react";
import styled from "styled-components";
import { ImageSize, ImageSizeMap } from "@foundation";

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: ImageSize;
  imgUrl: string;
  alt?: string;
}

const StyledImage = styled.img<{
  size: ImageSize;
}>`
  width: ${(props) => ImageSizeMap[props.size].size};
  height: ${(props) => ImageSizeMap[props.size].size};
  border-radius: ${(props) => ImageSizeMap[props.size].radius};
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
