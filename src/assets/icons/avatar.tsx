import { AVATAR_ITMES } from "./constant";
import { StyledSvg } from "./style";

type sizeType =
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge"
  | "xxl";

interface AvatarProps {
  size?: sizeType;
}

export const Avatar: React.FC<AvatarProps> = ({ size = "small", ...rest }) => {
  const sized =
    {
      extraSmall: 16,
      small: 24,
      medium: 32,
      large: 40,
      extraLarge: 48,
      xxl: 64,
    }[size] || 24;

  const avatarData = AVATAR_ITMES[size] || AVATAR_ITMES.extraSmall;

  return (
    <StyledSvg
      width={sized}
      height={sized}
      viewBox={`0 0 ${sized} ${sized}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={{}}
      {...rest}
    >
      <circle
        cx={avatarData.backgroundCircle.cx}
        cy={avatarData.backgroundCircle.cy}
        r={avatarData.backgroundCircle.r}
        fill={avatarData.backgroundCircle.fill}
      />
      <circle
        cx={avatarData.faceCircle.cx}
        cy={avatarData.faceCircle.cy}
        r={avatarData.faceCircle.r}
        fill={avatarData.faceCircle.fill}
      />
      <path d={avatarData.bodyPath} fill="#EF4444" />
    </StyledSvg>
  );
};
