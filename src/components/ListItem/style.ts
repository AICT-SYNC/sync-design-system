import styled from 'styled-components';
import { lightColors } from '../../tokens/LightColors';
import { Font } from '../../tokens/Font';

interface ListItemContainerProps {
  $size: 'large' | 'medium' | 'small';
}

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'large':
      return { height: '86px', padding: '0px 30px', gap: '32px' };
    case 'medium':
      return { height: '64px', padding: '0px 24px', gap: '24px' };
    case 'small':
      return { height: '48px', padding: '0px 20px', gap: '16px' };
    default:
      return { height: '86px', padding: '0px 30px', gap: '32px' };
  }
};

export const ListItemContainer = styled.div<ListItemContainerProps>`
  height: ${props => getSizeStyles(props.$size).height};
  padding: ${props => getSizeStyles(props.$size).padding};
  display: flex;
  align-items: center;
  gap: ${props => getSizeStyles(props.$size).gap};
  background-color: ${lightColors['static-white']};
  border-bottom: 1px solid ${lightColors['border-light']};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${lightColors['background-primary']};
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

interface TextProps {
  $size: 'large' | 'medium' | 'small';
}

const getTitleStyles = (size: string) => {
  switch (size) {
    case 'large':
      return Font.body.body2_semiBold;
    case 'medium':
      return Font.body.body3_semiBold;
    case 'small':
      return Font.label.label2_semiBold;
    default:
      return Font.body.body2_semiBold;
  }
};

const getSubtitleStyles = (size: string) => {
  switch (size) {
    case 'large':
      return Font.label.label1_semiBold;
    case 'medium':
      return Font.label.label2_semiBold;
    case 'small':
      return Font.label.label4_semiBold;
    default:
      return Font.label.label1_semiBold;
  }
};

export const TitleText = styled.div<TextProps>`
  ${props => getTitleStyles(props.$size)};
  color: #000000;
`;

export const SubtitleText = styled.div<TextProps>`
  ${props => getSubtitleStyles(props.$size)};
  color: #8E95A2;
`;