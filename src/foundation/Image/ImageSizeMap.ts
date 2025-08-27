import { image, radius } from "@tokens";
import { ImageSize } from "./ImageSize";

export const ImageSizeMap: Record<ImageSize, { size: string; radius: string }> ={
  [ImageSize.XS]: { size: image["image-xs"], radius: radius["radius-xs"] },
  [ImageSize.S]: { size: image["image-sm"], radius: radius["radius-xs"] },
  [ImageSize.M]: { size: image["image-md"], radius: radius["radius-xs"] },
  [ImageSize.L]: { size: image["image-lg"], radius: radius["radius-xs"] },
  [ImageSize.XL]: { size: image["image-xl"], radius: radius["radius-sm"] },
  [ImageSize["2XL"]]: { size: image["image-2xl"], radius: radius["radius-sm"] },
  [ImageSize["3XL"]]: { size: image["image-3xl"], radius: radius["radius-sm"] },
  [ImageSize["4XL"]]: { size: image["image-4xl"], radius: radius["radius-sm"] },
  [ImageSize["5XL"]]: { size: image["image-5xl"], radius: radius["radius-sm"] },
};
