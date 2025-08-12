import React from 'react';
import {
  CardContainer,
  CardHeader,
  WorkspaceImage,
  DefaultBackground,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  MemberInfo,
  MemberIcon,
  MemberCount,
  Actions,
  NotificationBadge,
} from './style.ts';
import settingIcon from '../../assets/icons/settingIcon.svg'

interface WorkspaceCardProps {
  type: 1 | 2;
  title?: string;
  description?: string;
  memberCount?: number;
  notificationCount?: number;
  image?: string;
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({
  type,
  title = "워크스페이스 제목",
  description = "워크스페이스 설명",
  memberCount = 4,
  notificationCount = 1,
  image
}) => {
  return (
    <CardContainer>
      {/* 상단 이미지 영역 */}
      <CardHeader>
        {image ? (
          <WorkspaceImage src={image} alt="workspace" />
        ) : (
          <DefaultBackground />
        )}
      </CardHeader>

      {/* 하단 정보 영역 */}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <hr></hr>
        <CardFooter>
          {/* 멤버 수 */}
          <MemberInfo>
            <MemberIcon></MemberIcon>
            <MemberCount>{memberCount}명</MemberCount>
          </MemberInfo>

          {/* 알림 및 설정 */}
          <Actions>
            {notificationCount > 0 && (
              <NotificationBadge>
                {notificationCount}
              </NotificationBadge>
            )}
            {type === 2 && (
              <img src={settingIcon} style={{ width: '20px', height: '20px' }} />
            )}
          </Actions>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
};

export default WorkspaceCard;