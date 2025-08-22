import styled from 'styled-components';
import { lightColors } from '../../tokens/LightColors';
import { Font } from '../../tokens/Font';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #D8DBDF;
`;

export const OpenIconBox = styled.div`
    display: flex;
    align-items: center;
    width: 15%;
    height: 100%;
    cursor: pointer;
    padding-left: 1%;
`;

export const BackButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7%;
    height: 100%;
`;

export const NavigationButton = styled.div<{ enabled: boolean }>`
    cursor: ${props => props.enabled ? 'pointer' : 'not-allowed'};
    opacity: ${props => props.enabled ? 1 : 0.5};
`;

export const PageBoxWrap = styled.div`
    display: flex;
    align-items: end;
    height: 100%;
    overflow-x: auto;
    flex: 1;
    
    /* 스크롤바 숨기기 */
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const TabBox = styled.div<{ isActive: boolean; isFirst: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    min-width: 150px;
    height: 100%;
    font-family: ${props => props.isActive ? Font.label.label4_semiBold : Font.label.label4_Regular};
    background-color: ${props => props.isActive ? '#EDEEF1' : 'transparent'};
    color: ${props => props.isActive ? '#383A42' : 'inherit'};
    position: relative;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.isActive ? '#EDEEF1' : '#e5e6e8ff'};
    }
    
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 100%;
        border-left: ${props => props.isFirst && !props.isActive ? `0.1px solid ${lightColors['border-medium']}` : 'none'};
        display: ${props => props.isFirst && !props.isActive ? 'block' : 'none'};
    }
    
    &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 100%;
        border-right: ${props => props.isActive ? 'none' : `0.1px solid ${lightColors['border-medium']}`};
        display: ${props => props.isActive ? 'none' : 'block'};
    }
`;

export const ContentBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
`;

export const CloseIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    margin-bottom: 2px;
    cursor: pointer;
    
    &:hover {
        background-color: #b4aeae57;
    }
`;

export const PlusIconWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    height: 95%;
    width: 30px;
    cursor: pointer;
`;