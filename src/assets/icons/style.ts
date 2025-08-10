import styled, { type Interpolation } from "styled-components";
export const StyledSvg = styled.svg<{ $svgStyle: Interpolation<object> }>`
  ${({ $svgStyle }) => $svgStyle}
`;