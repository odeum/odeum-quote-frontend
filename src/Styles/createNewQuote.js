import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 1500;
    height: 600px;
    display: inline-flex;
`

export const LeftSideWrapper = styled.div`
    width: 500px;
    height: 550px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-right: 20px;
`

export const RightSideWrapper = styled.div`
    width: 500px;
    height: 550px;
    display: flex;
    flex-direction: column;
    padding: 5px;
`

export const H1 = styled.div`
    font-family: sans-serif; //Source Sans Pro
    font-size: 16px;
    font-weight: bold;
`

export const Input = styled.input`
    width: ${(props) => props.width || '97%'};
    height: ${(props) => props.height || '20px'};
    padding: 5px;
    padding-left: 10px;
    font-family: sans-serif;
    font-size: 12px;
    margin-top: ${(props) => props.marginTop || '10px'};
    margin-bottom: ${(props) => props.marginBottom || '10px'};
    margin-right: ${(props) => props.marginRight || '0px'};
    border: none;
    border-radius: 4px;
    background-color: #E3E5E5;
    color: #585454;
`

export const TableWrapper = styled.div`
    width: 100%;
    height: 186px;
    overflow-x: auto;
    margin-bottom: 20px;
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #ddd;
    font-family: sans-serif;
    font-size: 18px;
`

export const TH = styled.th`
    text-align: left;
    padding: 10px;
    font-family: sans-serif;
    font-size: 14px;
`

export const TD = styled.td`
    text-align: left;
    padding: 10px;
    font-family: sans-serif;
    font-size: 14px;
`

export const TR = styled.tr`
    border-bottom: 1px solid #ddd;
    &:hover {
        background-color: #f1f1f1;
    }
`

export const TextArea = styled.textarea`
    width: 97%;
    height: 100px;
    padding: 5px;
    padding-top: 10px;
    padding-left: 10px;
    font-family: sans-serif;
    font-size: 12px;
    border: none;
    border-radius: 4px;
    background-color: #E3E5E5;
    color: #585454;
    margin-top: 10px;
    margin-bottom: 10px;
    resize: none;
`

export const ProductWrapper = styled.div`
    width: 100%;
    height: 32px;
    margin-bottom: 3px;
    display: inline-flex;
`

export const LabelWrapper = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
    display: inline-flex;
`

export const Label = styled.label`
    font-family: sans-serif;
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
    margin-right: ${(props) => props.marginRight || '0px'};
    width: ${(props) => props.width || ''};
    padding-top: ${(props) => props.paddingTop || '0px'};
`

export const TotalPriceWrapper = styled.div`
    width: 70%;
    height: 30px;
    margin-top: 97px;
    margin-left: auto;
    display: inline-flex;
`

export const SaveButton = styled.button`
    height: 30px;
    width: 120px;
    margin-top: 50px;
    margin-left: auto;
    background-color: #3B97D3;
    color: #fff;
    font-size: 12px;
    font-family: serif-sans;
    border: none;
    border-radius: 4px;
`