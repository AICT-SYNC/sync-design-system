import React from 'react'
import * as S from './style'

export type SizeTypes = "Bold" | 'Medium' |"Thin";

interface DividerProps {
    widthProps: string,
    Size: SizeTypes
}

const Divider: React.FC<DividerProps> = ({widthProps = '375px',  Size='Bold'}) => {
  return (
    <div>
      <S.Divider
        widthProps={widthProps} 
        SizeProps={Size}    
      />
    </div>
  )
}

export default Divider