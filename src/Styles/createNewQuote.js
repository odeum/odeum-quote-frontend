import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 1000px;
    height: 480px;
    display: inline-flex;
`

export const LeftSideWrapper = styled.div`
    width: 475px;
    height: 470px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-right: 40px;
`

export const RightSideWrapper = styled.div`
    width: 475px;
    height: 470px;
    display: flex;
    flex-direction: column;
    padding: 5px;
`

export const H1 = styled.div`
    font-family: sans-serif;
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
    height: 145px;
    overflow-x: auto;
    margin-bottom: 20px;
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #E3E5E5;
    font-family: sans-serif;
    font-size: 16px;
`

export const TH = styled.th`
    text-align: left;
    padding: 10px;
    font-family: sans-serif;
    font-size: 13px;
`

export const TD = styled.td`
    text-align: left;
    padding: 10px;
    font-family: sans-serif;
    font-size: 13px;
`

export const TR = styled.tr`
    border-bottom: 1px solid #E3E5E5;
    &:hover {
        background-color: #eee;
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
    margin-top: 23px;
    margin-left: auto;
    display: inline-flex;
`

export const SaveButton = styled.button`
    height: 30px;
    width: 120px;
    margin-top: 20px;
    margin-left: auto;
    background-color: #3B97D3;
    color: #fff;
    font-size: 12px;
    font-family: sans-serif;
    border: none;
    border-radius: 4px;
`