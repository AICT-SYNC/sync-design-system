import { avatarSize } from "@tokens/Size";
import { AvatarSizeEnum } from "./AvatarSize";

export const AvatarSizeMap: Record<AvatarSizeEnum, { size: string }> = {
  [AvatarSizeEnum.XS]: { size: avatarSize["avatar-xs"] },
  [AvatarSizeEnum.S]: { size: avatarSize["avatar-s"] },
  [AvatarSizeEnum.SM]: { size: avatarSize["avatar-sm"] },
  [AvatarSizeEnum.M]: { size: avatarSize["avatar-m"] },
  [AvatarSizeEnum.L]: { size: avatarSize["avatar-lg"] },
  [AvatarSizeEnum.XL]: { size: avatarSize["avatar-xl"] },
  [AvatarSizeEnum["2XL"]]: { size: avatarSize["avatar-2xl"] },
};
