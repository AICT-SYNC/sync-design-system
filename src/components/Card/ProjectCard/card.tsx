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
 MemberCount,
 Actions,
} from './style';
import { Settings } from 'lucide-react';
import { Avatar } from '../../../assets/icons/avatar';
import { Badge } from '../../Badge';
import { BadgeSize, BadgeRole } from '../../../foundation/Badge';


interface ProjectCardProps {
 title?: string;
 description?: string;
 memberCount?: number;
 notificationCount?: number;
 image?: string;
 imgColor?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
 title = "워크스페이스 제목",
 description = "워크스페이스",
 memberCount = 4,
 notificationCount = 1,
 image,
}) => {
 // 텍스트 자르기 함수
 const truncateText = (text: string, maxLength: number): string => {
   if (text.length <= maxLength) return text;
   return text.substring(0, maxLength) + '...';
 };

 const displayTitle = truncateText(title, 13);
 const displayDescription = truncateText(description, 20);

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
       <CardTitle>{displayTitle}</CardTitle>
       <CardDescription>{displayDescription}</CardDescription>
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
              <Badge 
                size={BadgeSize.S}
                role={BadgeRole.Info}
                count={notificationCount}
              />
           )}
             <Settings 
               size={20} 
               color="#666666"
               style={{ cursor: 'pointer' }}
             />
         </Actions>
       </CardFooter>
     </CardContent>
   </CardContainer>
 );
};

