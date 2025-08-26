import { list, user, Font } from "../../tokens";
import { ListSize } from "./ListSize";
import { CheckboxSize } from "../Checkbox";
import { AvatarSizeEnum } from "../Avatar";

export const ListSizeMap: Record<
  ListSize,
  {
    ListHeight: string;
    checkboxSize: CheckboxSize;
    avatarSize: AvatarSizeEnum;
    HoriontalPadding: string;
    ContentUserName: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      fontStyle: string;
      lineHeight: string;
    };
    ContentEmail: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      fontStyle: string;
      lineHeight: string;
    };
  }
> = {
  [ListSize.S]: {
    ListHeight: user["list-user-sm"],
    checkboxSize: CheckboxSize.XS,
    avatarSize: AvatarSizeEnum.S,
    HoriontalPadding: list["hpadding-sm"],
    ContentUserName: Font.label.label2_semiBold,
    ContentEmail: Font.label.label4_semiBold,
  },
  [ListSize.M]: {
    ListHeight: user["list-user-md"],
    checkboxSize: CheckboxSize.S,
    avatarSize: AvatarSizeEnum.L,
    HoriontalPadding: list["hpadding-md"],
    ContentUserName: Font.body.body3_semiBold,
    ContentEmail: Font.label.label2_semiBold,
  },
  [ListSize.L]: {
    ListHeight: user["list-user-lg"],
    checkboxSize: CheckboxSize.M,
    avatarSize: AvatarSizeEnum.XL,
    HoriontalPadding: list["hpadding-lg"],
    ContentUserName: Font.body.body2_semiBold,
    ContentEmail: Font.label.label1_semiBold,
  },
};
