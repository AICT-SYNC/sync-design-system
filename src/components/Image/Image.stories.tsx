import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Image, ImageProps } from "./Image";
import { ImageSize } from "../../foundation/Image";

const meta: Meta<ImageProps> = {
  title: "Components/Image",
  component: Image,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: Object.values(ImageSize),
    },
    imgUrl: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<ImageProps>;

const sampleImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJL3G4FReTesmzfZzQu0IezJUMDBZVfLC0uA&s";

export const ExtraSmall: Story = {
  args: {
    size: ImageSize.XS,
    imgUrl: sampleImageUrl,
  },
};

export const Small: Story = {
  args: {
    size: ImageSize.S,
    imgUrl: sampleImageUrl,
  },
};

export const Medium: Story = {
  args: {
    size: ImageSize.M,
    imgUrl: sampleImageUrl,
  },
};

export const Large: Story = {
  args: {
    size: ImageSize.L,
    imgUrl: sampleImageUrl,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: ImageSize.XL,
    imgUrl: sampleImageUrl,
  },
};

export const TwoXL: Story = {
  args: {
    size: ImageSize["2XL"],
    imgUrl: sampleImageUrl,
  },
};

export const ThreeXL: Story = {
  args: {
    size: ImageSize["3XL"],
    imgUrl: sampleImageUrl,
  },
};

export const FourXL: Story = {
  args: {
    size: ImageSize["4XL"],
    imgUrl: sampleImageUrl,
  },
};

export const FiveXL: Story = {
  args: {
    size: ImageSize["5XL"],
    imgUrl: sampleImageUrl,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
      {Object.values(ImageSize).map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <Image size={size} imgUrl={sampleImageUrl} />
          <span style={{ fontSize: "12px", color: "#666" }}>{size}</span>
        </div>
      ))}
    </div>
  ),
};