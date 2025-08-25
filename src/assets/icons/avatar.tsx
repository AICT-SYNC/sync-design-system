import { AVATAR_ITMES } from "./constant";
import { StyledSvg } from "./style";
import { AvatarSizeEnum, AvatarSizeMap } from "../../foundation";
import { useTheme } from "styled-components";

interface AvatarProps {
  size?: AvatarSizeEnum;
}

export const Avatar: React.FC<AvatarProps> = ({ size = AvatarSizeEnum.S, ...rest }) => {
  const theme = useTheme();
  const avatarData = AVATAR_ITMES[size] || AVATAR_ITMES.XL;
  const sizeValue = AvatarSizeMap[size]?.size || AvatarSizeMap[AvatarSizeEnum.XL].size;
  const avatarColor = (theme as any)["avatar-user"];
  const bgColor = (theme as any)["user-away"];
  const viewBoxSize = avatarData.backgroundCircle.r * 2;

  return (
    <StyledSvg
      width={sizeValue}
      height={sizeValue}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={{}}
      {...rest}
    >
      <circle
        cx={avatarData.backgroundCircle.cx}
        cy={avatarData.backgroundCircle.cy}
        r={avatarData.backgroundCircle.r}
        fill={bgColor}
      />
      <circle
        cx={avatarData.faceCircle.cx}
        cy={avatarData.faceCircle.cy}
        r={avatarData.faceCircle.r}
        fill={avatarColor}
      />
      <path d={avatarData.bodyPath} fill={avatarColor} />
    </StyledSvg>
  );
};
