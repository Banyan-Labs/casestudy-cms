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
  justify-content: center;
`;

export const Header = styled.div`
  color: black;
  margin-top: 30%;
  text-align: center;
`;

export const Input = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1em',
}))``;

export const PasswordInput = styled(Input).attrs({
  type: 'password',
})``;

export const EmailInput = styled(Input).attrs({
  type: 'email',
})``;

export const SubmitInput = styled(Input).attrs({
  type: 'submit',
})`
  background-color: #9fb5d5;
  height: 25px;
  width: 70px;
`;
