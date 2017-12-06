import styled from 'styled-components';

export const Popup = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
    box-sizing: border-box; 
`

export const InnerPopup = styled.div`
    position: absolute;
    right: 40%;
    top: 30%;
    bottom: 45%;
    left: 40%;
    margin: auto;
    background: #fff;
    border-radius: 4px;
    box-sizing: border-box; 
`

export const Text = styled.p`
    font-family: sans-serif;
    font-size: 14;
    text-align: center;
`

export const StyledModalHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #3B97D3;
    color: #fff;
    box-sizing: border-box; 
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 25px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    user-select: none;
`

export const StyledModalHeaderIcon = styled.div`
    margin-right: 5px;
`

export const StyledModalHeaderTitle = styled.div`
    float: left;
`

export const StyledModalHeaderClose = styled.div`
    float: right;
    margin-left: auto;
    cursor: pointer;
`