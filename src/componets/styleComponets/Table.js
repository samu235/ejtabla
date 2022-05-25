import styled from 'styled-components'

export const Table = styled.table`
    font-size: 20px;
    text-align: center;
    border-collapse: unset;
    border-spacing: 0;
    border: 0px solid ;
    border-radius: 15px;
    background-color: #01987A;
    
    
`;
export const Tr = styled.tr`
    color: black ;
    background-color: white;
    &:hover{
        color: #01987A;
        background-color: #F3F3F3;
   }
    
`;
export const Trhead = styled.tr`
    color:white;
    background-color: #01987A;
`;
export const Td = styled.td`
`;
export const Th = styled.th`
    padding: 8px;
    border-radius: 15px;
    
`;
export const Main = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    
`;

