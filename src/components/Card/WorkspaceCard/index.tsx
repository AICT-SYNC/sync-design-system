import React from 'react';
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
} from './style.ts';
import { Settings } from 'lucide-react';
import { Avatar } from '../../../assets/icons/avatar.tsx';

interface WorkspaceCardProps {
  isAdmin: boolean; // isAdmin prop 추가
  showSettings: boolean;
  title?: string;
  description?: string;
  memberCount?: number;
  notificationCount?: number;
  avatar?: React.ReactNode;
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({
  isAdmin, // isAdmin 받기
  showSettings,
  title = "프로젝트 제목",
  description = "4개의 프로젝트", 
  memberCount = 4,
  notificationCount = 1,
  avatar
}) => {
  return (
    <WorkspaceCardContainer>
      <SideBox></SideBox>
      <ContentBox>
        <ContentHeader>
          <ImgBox></ImgBox>
          {/* isAdmin이 true일 때만 Settings 아이콘 보이기 */}
          {isAdmin && (
            <Settings
              style={{
                color: '#8E95A2',
                width: '17px',
                height: '17px',
              }}
            />
          )}
        </ContentHeader>
        <Content>
          <Title>워크스페이스 제목</Title>
          <Description>워크스페이스 설명</Description>
        </Content>
        <Hr></Hr>
        <Footer>
          <Avatar size='extraSmall'/>
          <MemberCount>4명</MemberCount>
        </Footer>
      </ContentBox>
    </WorkspaceCardContainer>
  );
};

export default WorkspaceCard;