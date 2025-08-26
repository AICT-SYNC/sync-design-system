import styled from 'styled-components';
import { Font } from '../../tokens/Font';
import { ListSize } from '../../foundation/List' 
import { list } from '../../tokens' 
import { user } from '../../tokens'


interface ListContainerProps {
  size: ListSize;
  $select: boolean;
}

export const ListContainer = styled.div<ListContainerProps>`
  display:flex;
  flex-direction:row;
  width: 967px;
  height: ${({ size }) => {
    switch (size) {
      case ListSize.S: return user['list-user-sm'];
      case ListSize.M: return user['list-user-md'];
      case ListSize.L: return user['list-user-lg'];
      default: return user['list-user-lg'];
    }
  }};
  border: 1px solid ${({ theme }) => theme['border-light']};
  padding-left: ${({ size, $select }) => {
    if ($select) return '30px';
    switch (size) {
      case ListSize.S: return list['hpadding-sm'];
      case ListSize.M: return list['hpadding-md'];
      case ListSize.L: return list['hpadding-lg'];
      default: return list['hpadding-lg'];
    }
  }};
  display: flex;
  align-items: center;
  gap: 32px;
  background-color: white;
  
`;

interface ContentBoxProps {
  $size: ListSize;
}

export const ContentBox = styled.div<ContentBoxProps>`
  width:175px;
  width: ${({ $size }) => {
    switch ($size) {
      case ListSize.S: return '131px';
      case ListSize.M: return '153px';
      case ListSize.L: return '175px';
      default: return Font.label.label1_Regular.fontFamily;
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case ListSize.S: return '35px';
      case ListSize.M: return '42px';
      case ListSize.L: return '47px';
      default: return Font.label.label1_Regular.fontFamily;
    }
  }};

`
export const ContentName = styled.div<ContentBoxProps>`
 height:50%;
 width:100%;
 font-family: ${({ $size }) => {
    switch ($size) {
      case ListSize.S: return Font.label.label2_semiBold;
      case ListSize.M: return Font.body.body3_semiBold;
      case ListSize.L: return Font.body.body2_semiBold;
      default: return Font.label.label1_Regular.fontFamily;
    }
  }};

`

export const ContentEmail = styled.div<ContentBoxProps>`
height:50%;
width:100%;
font-family: ${({ $size }) => {
    switch ($size) {
      case ListSize.S: return Font.label.label4_semiBold;
      case ListSize.M: return Font.label.label2_semiBold;
      case ListSize.L: return Font.label.label1_semiBold;
      default: return Font.label.label1_semiBold;
    }
  }};
  color: ${( {theme} ) => theme['text-muted']};
`