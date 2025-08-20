
import styled from 'styled-components';
import { lightColors } from '../../../tokens/semantic';
import { Font } from '../../../tokens/Font';

export const CardContainer = styled.div`
  width: 100%;
  height: 220px;
  max-width: 520px;
  min-width: 317px;
  min-height: 220px;
  max-height: 360px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }


  /* 태블릿 세로 (768px ~ 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 95%;
    min-width: 300px;
    max-width: 450px;
    height: 210px;
    min-height: 200px;
    max-height: 280px;
  }

  /* 태블릿 가로 / 작은 데스크톱 (1024px ~ 1279px) */
  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 90%;
    min-width: 317px;
    max-width: 480px;
    height: 220px;
    min-height: 220px;
    max-height: 320px;
  }

  /* 데스크톱 (1280px ~ 1535px) */
  @media (min-width: 1280px) and (max-width: 1535px) {
    width: 85%;
    min-width: 317px;
    max-width: 520px;
    height: 220px;
    min-height: 220px;
    max-height: 360px;
  }

  /* 대형 데스크톱 (1536px ~ 1919px) */
  @media (min-width: 1536px) and (max-width: 1919px) {
    width: 80%;
    min-width: 350px;
    max-width: 550px;
    height: 240px;
    min-height: 240px;
    max-height: 380px;
  }

  /* 초대형 화면 (1920px+) */
  @media (min-width: 1920px) {
    width: 75%;
    min-width: 400px;
    max-width: 600px;
    height: 260px;
    min-height: 260px;
    max-height: 400px;
  }

`;

export const CardHeader = styled.div`
  height: 40%;
  position: relative;
  overflow: hidden;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DefaultBackground = styled.div`
  width: 100%;
  height: 100%;
  background: ${lightColors['project-active']};
`;

export const CardContent = styled.div`
  padding: 20px;
  height: 60%;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-family:${Font.body.body1_semiBold};
  color: #1a1a1a;
  margin: 0 0 6px 0;
  line-height: 1.2;
  align-self: flex-start;
`;

export const CardDescription = styled.p`
  font-family:${Font.body.body3_Regular};
  color: #666666;
  margin:0;
  line-height: 1.3;
  align-self: flex-start;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
  border-top:1px solid #D8DBDF;
  margin-bottom: 7%;
`;

export const MemberInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MemberIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #ff9500;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const MemberCount = styled.span`
  font-size: 12px;
  color: #666666;
  font-weight: 500;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NotificationBadge = styled.div`
  width: 26px;
  height: 18px;
  background: ${lightColors['project-active']};
  color: white;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
`;

export const SettingsIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #666666;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;
