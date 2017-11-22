import styled from 'styled-components';

export const LinkPosition = styled.div`
    display: block;
`

export const LinkWrapper = styled.div`
    width: 209px;
    height: 25px;
    display: flex;
    overflow-x: auto;
    background-color: #FFFFFF;
    border-bottom: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
    border-color: #d3d3d3;
    padding: 5px;
    z-index: 1;
    position: relative;
    &:hover {
        background-color: #d3d3d3;
    }
`

export const Link = styled.a`
    color: #585454;
    font-family: sans-serif;
    font-size: 14px;
    padding-top: 5px;
    padding-left: 7px;
    padding-right: 7px;
    overflow: hidden;
    text-overflow: ellipsis; 
`