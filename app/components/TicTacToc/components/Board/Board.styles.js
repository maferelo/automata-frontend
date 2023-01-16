import styled from 'styled-components';

export const StatusDiv = styled.div`
    margin-bottom: 10px;
`;

export const BoardRowDiv = styled.div`
    &:after {
        clear: both;
        content: "";
        display: table;
    }
`;
