import styled from 'styled-components';
import { lightColors } from '../../../tokens/semantic';
import { Font } from '../../../tokens/Font';


export const WorkspaceCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 220px;
  min-height:220px;
  max-height:360px;
  width: 317px;
  min-width:317px;
  max-width:520px;
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

export const SideBox = styled.div`
  width: 38px;
  height:360px;
  background-color: ${lightColors['project-active']};
  border-top-left-radius:12px;
  border-bottom-left-radius:12px;

`
export const ContentBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
`
export const ContentHeader = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:90%;
    height:30%;
`
export const Content = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width:90%;
    height:30%;
`
export const Footer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width:90%;
    height:10%;
`

export const Hr = styled.hr`
    width:90%;
    border:0.1px solid ${lightColors['divider-archived']};
    margin:3%;
`
export const ImgBox = styled.div`
    width:50px;
    height:50px;
    border-radius:8px;
    background-color:skyblue;
`

export const Title = styled.h3`
margin: 0;
`
    

export const Description = styled.span`
    color: ${lightColors['text-secondary']};
    font-weight:2;
    font-size:medium;
    margin-bottom:3%;

`
export const MemberCount = styled.div`
    color:${lightColors['text-muted']};
    font-size:small;
    margin:5px;
    margin-top:4%;


`