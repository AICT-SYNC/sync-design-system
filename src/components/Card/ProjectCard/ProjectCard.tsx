import React, { useState } from "react";
import * as S from "./style"
import { Settings, X } from "lucide-react";
import { Avatar } from "@assets/icons";
import { Badge } from "../../Badge";
import { BadgeRole, BadgeSize, AvatarSizeEnum } from "@foundation";

export interface ProjectCardProps {
  title?: string;
  description?: string;
  memberCount?: number;
  notificationCount?: number;
  image?: string;
  borderColor?: string;
  onClickSettings?: () => void;
  onDelete?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title = "워크스페이스 제목",
  description = "0개의 프로젝트",
  memberCount = -1,
  notificationCount = -1,
  image,
  borderColor,
  onClickSettings,
  onDelete,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // 텍스트 자르기 함수
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const displayTitle = truncateText(title, 13);
  const displayDescription = truncateText(description, 20);

  const handleSettingsClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
    onClickSettings?.();
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
    onDelete?.();
  };

  return (
    <S.CardContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 삭제 버튼 - 호버 시에만 표시 */}
      {isHovered && onDelete && (
        <S.DeleteButton onClick={handleDeleteClick}>
          <X size={16} color="#f10404" />
        </S.DeleteButton>
      )}

      {/* 상단 이미지 영역 */}
      <S.CardHeader>
        {image ? (
          <S.ProjectImage src={image} alt="Project" />
        ) : (
          <S.DefaultBackground $borderColor={borderColor} />
        )}
      </S.CardHeader>

      {/* 하단 정보 영역 */}
      <S.CardContent>
        <S.CardTitle>{displayTitle}</S.CardTitle>
        <S.CardDescription>{displayDescription}</S.CardDescription>
        <hr />

        <S.CardFooter>
          {/* 멤버 수 */}
          <S.MemberInfo>
            <Avatar size={AvatarSizeEnum.XS} />
            <S.MemberCount>{memberCount}</S.MemberCount>
          </S.MemberInfo>

          {/* 알림 및 설정 */}
          <S.Actions>
            {notificationCount > 0 && (
              <Badge
                size={BadgeSize.S}
                role={BadgeRole.Info}
                count={notificationCount}
              />
            )}
            <S.SettingsButton onClick={handleSettingsClick}>
              <Settings 
                size={20} 
                color="#666666"
              />
            </S.SettingsButton>
          </S.Actions>
        </S.CardFooter>
      </S.CardContent>
    </S.CardContainer>
  );
};