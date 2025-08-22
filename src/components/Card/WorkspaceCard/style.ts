import styled from 'styled-components';
import { lightColors } from '../../../tokens/semantic';
import { Font } from '../../../tokens/Font';

export const WorkspaceCardContainer = styled.div`
 display: flex;
 flex-direction: row;
 align-items: stretch;
 width: 100%;
 height: 220px;
 min-height: 220px;
 max-height: 360px;
 min-width: 317px;
 max-width: 520px;
 background: white;
 border-radius: 12px;
 box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
 overflow: hidden;
 transition: transform 0.2s ease, box-shadow 0.2s ease;

 &:hover {
   transform: translateY(-2px);
   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
 }

 /* 모바일 */
 @media (max-width: 767px) {
   min-width: 280px;
   max-width: 350px;
   height: 180px;
   min-height: 180px;
   max-height: 220px;
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

export const SideBox = styled.div`
 width: 30px;
 height: 100%;
 background-color: ${lightColors['project-active']};
 border-top-left-radius: 12px;
 border-bottom-left-radius: 12px;
 
 @media (max-width: 767px) {
   width: 25px;
 }
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
 width: 90%;
 height: 10%;
`;

export const Hr = styled.hr`
 width: 90%;
 border: 0.1px solid ${lightColors['divider-archived']};
 margin: 3%;
`;

export const ImgBox = styled.div`
 width: 50px;
 height: 50px;
 border-radius: 8px;
 background-color: skyblue;
 
 @media (max-width: 767px) {
   width: 40px;
   height: 40px;
 }
 
 @media (min-width: 1536px) {
   width: 55px;
   height: 55px;
 }
`;

export const Title = styled.h3`
 margin: 0;
 font-family: ${Font.body.body2_Bold};
 
 @media (max-width: 767px) {
   font-family: ${Font.body.body3_Bold};
 }
 
 @media (min-width: 1536px) {
   font-family: ${Font.body.body1_Bold};
 }
`;

export const Description = styled.span`
 color: ${lightColors['text-secondary']};
 font-weight: 2;
 font-size: medium;
 margin-bottom: 3%;
 font-family: ${Font.body.body3_Regular};
 
 @media (max-width: 767px) {
   font-family: ${Font.label.label1_Regular};
   font-size: small;
 }
 
 @media (min-width: 1024px) and (max-width: 1535px) {
   font-family: ${Font.body.body3_Regular};
 }
 
 @media (min-width: 1536px) {
   font-family: ${Font.body.body2_Regular};
   font-size: large;
 }
`;

export const MemberCount = styled.div`
 color: ${lightColors['text-muted']};
 font-size: small;
 margin: 5px;
 margin-top: 4%;
 
 @media (max-width: 767px) {
   font-size: x-small;
   margin: 3px;
 }
 
 @media (min-width: 1536px) {
   font-size: medium;
   margin: 6px;
 }
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
 
 @media (max-width: 767px) {
   width: 22px;
   height: 16px;
   font-size: 11px;
 }
 
 @media (min-width: 1536px) {
   width: 30px;
   height: 20px;
   font-size: 14px;
 }
`;

export const AvatarBox = styled.div`
 display: flex;
 flex-direction: row;
 height: 100%;
`;