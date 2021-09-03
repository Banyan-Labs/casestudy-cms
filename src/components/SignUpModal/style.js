import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #e4e4e4;
  border: black solid 2px;
  height: 40vh;
  width: 400px;
  display: flex;
  z-index: 1;
  text-align: center;
  h1 {
    color: black;
    padding-left: 20px;
  }
  #email {
    margin-left: 18%;
  }
  #username {
    margin-left: 8.5%;
  }
  #password {
    margin-left: 10%;
  }
  #submit {
    margin-left: 30%;
    background-color: #9fb5d5;
  }
`;
