import styled , {css} from 'styled-components';

const defaultStyle = css`
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: ${(props)=> props.isActive ? "#135BEC" : "#475569"};
`

export const SidebarStyle = styled.p`
    ${defaultStyle};
`

const defaultTitle = css`
    font-weight: 800;
    font-size: 29.9px;
    line-height: 37.5px;
    letter-spacing: -0.75px;
    color: #111827;
`

export const Title = styled.p`
    ${defaultTitle};
`