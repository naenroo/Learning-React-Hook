import styled from 'styled-components';

export const CrudContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  border: 10px solid lightseagreen;
  padding: 30px;
  border-radius: 15px;
`;

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
`;

export const Button = styled.button`
  outline: none;
  background: #f44336;
  color: white;
  width: 49px;
  height: 23px;
  margin-left: 5px;
  border: 2px solid black;
  border-radius: 5px;

  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5;
     background-color: grey;
     pointer-event: none;
    `}
`;
