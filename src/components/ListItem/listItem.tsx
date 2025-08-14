import React from 'react';
import { 
  ListItemContainer, 
  CheckboxWrapper, 
  AvatarWrapper, 
  ContentWrapper, 
  TitleText, 
  SubtitleText 
} from './style';
import Checkbox from '../Checkbox/checkbox';
import { Avatar } from '../../assets/icons/avatar';

interface ListItemProps {
  title: string;
  subtitle: string;
  showCheckbox?: boolean;
  checked?: boolean;
  onCheckboxChange?: (checked: boolean) => void;
  showAvatar?: boolean;
  avatarSrc?: string;
  onClick?: () => void;
  size?: 'large' | 'medium' | 'small';
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  showCheckbox = false,
  checked = false,
  onCheckboxChange,
  showAvatar = true,
  avatarSrc,
  onClick,
  size = 'large'
}) => {
  const getCheckboxSize = () => {
    switch (size) {
      case 'large': return 'medium';
      case 'medium': return 'small';
      case 'small': return 'xsmall';
      default: return 'medium';
    }
  };

  const getAvatarSize = () => {
    switch (size) {
      case 'large': return 'extraLarge';
      case 'medium': return 'large';
      case 'small': return 'medium';
      default: return 'extraLarge';
    }
  };
  return (
    <ListItemContainer $size={size} onClick={onClick}>
      {showCheckbox && (
        <CheckboxWrapper>
          <Checkbox 
            size={getCheckboxSize() as any}
            checked={checked}
            onChange={onCheckboxChange}
          />
        </CheckboxWrapper>
      )}
      
      {showAvatar && (
        <AvatarWrapper>
          {avatarSrc ? (
            <img src={avatarSrc} alt="avatar" />
          ) : (
            <Avatar size={getAvatarSize() as any} />
          )}
        </AvatarWrapper>
      )}
      
      <ContentWrapper>
        <TitleText $size={size}>{title}</TitleText>
        <SubtitleText $size={size}>{subtitle}</SubtitleText>
      </ContentWrapper>
    </ListItemContainer>
  );
};

export default ListItem;