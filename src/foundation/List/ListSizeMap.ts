import { user } from "../../tokens";
import { ListSize } from "./ListSize";
import { CheckboxSize } from "../Checkbox";
import { AvatarSizeEnum } from "../Avatar";

export const ListSizeMap: Record<ListSize, { size: string; checkboxSize: CheckboxSize, avatarSize: AvatarSizeEnum }> ={
  [ListSize.S]: { size: user['list-user-sm'], checkboxSize: CheckboxSize.XS, avatarSize: AvatarSizeEnum.S},
  [ListSize.M]: { size: user['list-user-md'], checkboxSize: CheckboxSize.S, avatarSize: AvatarSizeEnum.L},
  [ListSize.L]: { size: user['list-user-lg'], checkboxSize: CheckboxSize.M, avatarSize: AvatarSizeEnum.XL},
};
