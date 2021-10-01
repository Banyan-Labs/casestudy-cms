import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  margin-top: 5%;
  margin-left: 40%;
  position: absolute;
`;

export const Content = styled.div`
  background-color: #e4e4e4;
  border: black solid 2px;
  height: 250px;
  width: 400px;
  display: flex;
  z-index: 1;
  text-align: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const Header = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;
