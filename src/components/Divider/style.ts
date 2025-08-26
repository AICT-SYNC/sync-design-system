import styled from 'styled-components';

interface Props {
   $widthProps: string,
   $SizeProps: "Bold" | "Medium" | "Thin"
}

export const Divider = styled.div<Props>`
   width: ${props => props.$widthProps};
   height: ${props => {
       switch(props.$SizeProps) {
           case 'Bold': return '4px';
           case 'Medium': return '2px';
           case 'Thin': return '1px';
           default: return '4px';
       }
   }};
   background-color: ${({ theme }) => theme["divider-archived"]};
   background-color: ${({ theme }) => theme['divider-archived']};
`;