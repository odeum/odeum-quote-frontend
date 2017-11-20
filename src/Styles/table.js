import styled from 'styled-components';

export const TableWrapper = styled.div`
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '160px'};
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