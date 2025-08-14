import React from 'react';
import {
  CardContainer,
  CardHeader,
  ProjectImage,
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
import { Settings } from 'lucide-react';
import { Avatar } from '../../../assets/icons/avatar.tsx';

interface ProjectCardProps {
  showSettings: boolean; // true = 설정 아이콘 표시, false = 알림만 표시
  title?: string;
  description?: string;
  memberCount?: number;
  notificationCount?: number;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  showSettings,
  title = "워크스페이스 제목",
  description = "워크스페이스",
  memberCount = 4,
  notificationCount = 1,
  image
}) => {
  return (
    <CardContainer>
      {/* 상단 이미지 영역 */}
      <CardHeader>
        {image ? (
          <ProjectImage src={image} alt="Project" />
        ) : (
          <DefaultBackground />
        )}
      </CardHeader>

      {/* 하단 정보 영역 */}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <hr />
        
        <CardFooter>
          {/* 멤버 수 */}
          <MemberInfo>
            <Avatar size='extraSmall' />
            <MemberCount>{memberCount}명</MemberCount>
          </MemberInfo>

          {/* 알림 및 설정 */}
          <Actions>
            {notificationCount > 0 && (
              <NotificationBadge>
                {notificationCount}
              </NotificationBadge>
            )}
            {showSettings && (
              <Settings 
                size={20} 
                color="#666666"
                style={{ cursor: 'pointer' }}
              />
            )}
          </Actions>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;