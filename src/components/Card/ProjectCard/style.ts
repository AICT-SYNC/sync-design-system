
import styled from 'styled-components';
import { lightColors } from '../../../tokens/semantic';

export const CardContainer = styled.div`
  width: 320px;
  max-width:520px;
  min-width:280px;
  height: 230px;
  min-height:160px;
  max-height:360px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`;

export const CardHeader = styled.div`
  height: 100px;
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
  height: 200px;
  background: ${lightColors['project-active']};
`;

export const CardContent = styled.div`
  padding: 20px;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 6px 0;
  line-height: 1.2;
  align-self: flex-start;
`;

export const CardDescription = styled.p`
  font-size: 15px;
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
