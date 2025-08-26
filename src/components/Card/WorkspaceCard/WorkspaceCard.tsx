import React from "react";
import {
  WorkspaceCardContainer,
  SideBox,
  ContentBox,
  ContentHeader,
  Content,
  Footer,
  Hr,
  ImgBox,
  Title,
  Description,
  MemberCount,
  AvatarBox,
} from "./style";
import { Settings } from "lucide-react";
import { Avatar } from "../../../assets/icons/avatar.tsx";
import { Badge } from "../../Badge/index.ts";
import { BadgeRole, BadgeSize, AvatarSizeEnum } from "../../../foundation";

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
  description = "4개의 프로젝트",
  memberCount = 4,
  notificationCount = 1,
}) => {
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const displayTitle = truncateText(title, 13);
  const displayDescription = truncateText(description, 20);

  return (
    <WorkspaceCardContainer>
      <SideBox></SideBox>
      <ContentBox>
        <ContentHeader>
          <ImgBox></ImgBox>
          <Settings
            style={{
              color: "#8E95A2",
              width: "17px",
              height: "17px",
            }}
          />
        </ContentHeader>
        <Content>
          <Title>{displayTitle}</Title>
          <Description>{displayDescription}</Description>
        </Content>
        <Hr></Hr>
        <Footer>
          <AvatarBox>
            <Avatar size={AvatarSizeEnum.XS} />
            <MemberCount>{memberCount}</MemberCount>
          </AvatarBox>
          <Badge
            size={BadgeSize.S}
            role={BadgeRole.Info}
            count={notificationCount}
          />
        </Footer>
      </ContentBox>
    </WorkspaceCardContainer>
  );
};
