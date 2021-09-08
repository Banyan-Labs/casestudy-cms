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
    margin-left: 2%;
    margin-bottom: 15px;
    background-color: #9fb5d5;
  }
`;
