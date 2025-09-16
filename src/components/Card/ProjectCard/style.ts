import styled from 'styled-components';
import { Font } from '@tokens/Font';

export const CardContainer = styled.div`
  width: 100%;
  height: 220px;
  max-width: 520px;
  background: ${({ theme }) => theme["static-white"]};
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
  height: 35%;
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
  background: ${({ theme }) => theme["project-active"]};
`;

export const CardContent = styled.div`
  padding: 20px;
  height: 60%;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font: ${Font.body.body2_semiBold};
  color: ${({ theme }) => theme["text-black"]};
  margin: 0 0 6px 0;
  align-self: flex-start;
`;

export const CardDescription = styled.p`
  font: ${Font.label.label2_Regular};
  color: ${({ theme }) => theme["text-muted"]};
  margin: 0;
  align-self: flex-start;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
  border-top: 1px solid ${({ theme }) => theme["border-light"]};
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
  background: ${({ theme }) => theme["action-important"]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const MemberCount = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme["text-muted"]};
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
  background: ${({ theme }) => theme["project-active"]};
  color: ${({ theme }) => theme["static-white"]};
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
  color: ${({ theme }) => theme["text-muted"]};
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme["bg-secondary"]};
  }
`;