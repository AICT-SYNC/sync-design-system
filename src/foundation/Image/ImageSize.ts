import { image } from "../../tokens/Size/Image"

export const ImageSize = {
  XS: image["image-xs"],
  S: image["image-sm"],
  M: image["image-md"],
  L: image["image-lg"],
  XL: image["image-xl"],
  "2XL": image["image-2xl"],
  "3XL": image["image-3xl"],
  "4XL": image["image-4xl"],
  "5XL": image["image-5xl"],
} as const

export type ImageSizeType = typeof ImageSize[keyof typeof ImageSize]
