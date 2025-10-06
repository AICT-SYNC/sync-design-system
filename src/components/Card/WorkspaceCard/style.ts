import styled from 'styled-components';
import { Font } from '@tokens/Font';

export const WorkspaceCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  height: 220px;
  max-width: 400px;
  min-width: 250px;
  background: ${({ theme }) => theme["static-white"]};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor:pointer;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    background-color:${({theme}) => theme['bg-primary']}
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 95%;
    min-width: 300px;
    max-width: 450px;
    height: 210px;
    min-height: 200px;
    max-height: 280px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 90%;
    min-width: 317px;
    max-width: 480px;
    height: 220px;
    min-height: 220px;
    max-height: 320px;
  }

  @media (min-width: 1280px) and (max-width: 1535px) {
    width: 85%;
    min-width: 317px;
    max-width: 520px;
    height: 220px;
    min-height: 220px;
    max-height: 360px;
  }

  @media (min-width: 1536px) and (max-width: 1919px) {
    width: 80%;
    min-width: 350px;
    max-width: 550px;
    height: 240px;
    min-height: 240px;
    max-height: 380px;
  }

  @media (min-width: 1920px) {
    width: 75%;
    min-width: 400px;
    max-width: 600px;
    height: 260px;
    min-height: 260px;
    max-height: 400px;
  }
`;

export const SideBox = styled.div`
  width: 30px;
  height: 100%;
  background-color: ${({ theme }) => theme["project-active"]};
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 30%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  height: 30%;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top:1%;
  width: 90%;
  height: 10%;
`;

export const Hr = styled.hr`
  width: 90%;
  border: 0.1px solid ${({ theme }) => theme["divider-archived"]};
  margin: 3%;
`;

export const ImgBox = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;

export const PlaceholderBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme["bg-sidebar"]};
`;

export const SettingsButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(142, 149, 162, 0.1);
  }

  &:active {
    background-color: rgba(142, 149, 162, 0.2);
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-family: ${Font.body.body2_semiBold.fontFamily};
  font-size: ${Font.body.body2_semiBold.fontSize};
  font-weight: ${Font.body.body2_semiBold.fontWeight};
  line-height: ${Font.body.body2_semiBold.lineHeight};
  color: ${({ theme }) => theme["text-black"]};
`;

export const Description = styled.span`
  color: ${({ theme }) => theme["text-secondary"]};
  font-family: ${Font.label.label1_Regular.fontFamily};
  font-size: ${Font.label.label1_Regular.fontSize};
  font-weight: ${Font.label.label1_Regular.fontWeight};
  line-height: ${Font.label.label1_Regular.lineHeight};
  margin-bottom: 3%;
`;

export const MemberCount = styled.div`
  color: ${({ theme }) => theme["text-muted"]};
  font-size: 14px;
  margin: 5px;
  margin-top: 4%;
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

export const AvatarBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
