import styled from 'styled-components';

export const DropdownWrapper = styled.div`
    width: 250px;
    height: 30px;
    display: flex;
    overflow-x: auto;
    background-color: #FFFFFF;
    border: 1px black solid;
    &:hover {
        background-color: #d3d3d3;
    }
`

export const LinkWrapper = styled.div`
    display: block;
`

export const Link = styled.a`
    color: #000;
    border-color: #d3d3d3;
`