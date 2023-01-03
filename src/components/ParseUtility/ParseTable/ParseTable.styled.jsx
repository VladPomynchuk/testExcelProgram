import styled from 'styled-components';

export const StyledTable = styled.table`
  font-family: 'Montserrat';
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
  width: 100%;
  border-spacing: 0 8px;
  border-collapse: separate;
  thead {
    th {
      color: grey;
      text-align: left;
    }
  }
  tbody {
    tr {
      height: 62px;
      background-color: #fff;
      box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    }
  }
`;

export const StyledBookTitle = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
`;

export const StyledIconBox = styled.div`
  margin-right: 10px;
`;

export const Wrapper = styled.div`
  :not(:last-child) {
  }
`;
