import React from "react";
import * as S from "./style"
import { Settings } from "lucide-react";
import { Avatar } from "../../../assets/icons";
import { Badge } from "../../Badge";
import { BadgeRole, BadgeSize } from "../../../foundation";
import { AvatarSizeEnum } from "../../../foundation";

interface WorkspaceCardProps {
  title?: string;
  description?: string;
  memberCount?: number;
  notificationCount?: number;
  avatar?: React.ReactNode;
  imageUrl?: string;
}

export const WorkspaceCard: React.FC<WorkspaceCardProps> = ({
  title = "프로젝트 제목",
  description = "프로젝트",
  memberCount = -1,
  notificationCount = -1,
}) => {
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const displayTitle = truncateText(title, 13);
  const displayDescription = truncateText(description, 20);

  return (
    <S.WorkspaceCardContainer>
      <S.SideBox />
      <S.ContentBox>
        <S.ContentHeader>
          <S.ImgBox></S.ImgBox>
          <Settings
            style={{
              color: "#8E95A2",
              width: "17px",
              height: "17px",
            }}
          />
        </S.ContentHeader>
        <S.Content>
          <S.Title>{displayTitle}</S.Title>
          <S.Description>{displayDescription}</S.Description>
        </S.Content>
        <S.Hr></S.Hr>
        <S.Footer>
          <S.AvatarBox>
            <Avatar size={AvatarSizeEnum.XS} />
            <S.MemberCount>{memberCount}</S.MemberCount>
          </S.AvatarBox>
          <Badge
            size={BadgeSize.S}
            role={BadgeRole.Info}
            count={notificationCount}
          />
        </S.Footer>
      </S.ContentBox>
    </S.WorkspaceCardContainer>
  );
};
