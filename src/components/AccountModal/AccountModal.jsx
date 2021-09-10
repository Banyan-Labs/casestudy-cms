import React from 'react';
import {
  ModalContainer,
  Content,
  Header,
  Input,
  PasswordInput,
  EmailInput,
  SubmitInput,
  InputContainer,
} from './style';
import PropTypes from 'prop-types';

const AccountModal = ({ modalType }) => {
  return (
    <ModalContainer>
      <Content>
        {modalType === 1 ? (
          <InputContainer>
            <Header>Sign Up For An Account</Header>
            <EmailInput placeholder='Email' required />
            <Input placeholder='Username' required />
            <PasswordInput placeholder='Password' required />
            <SubmitInput value='Sign Up' />
          </InputContainer>
        ) : (
          <InputContainer>
            <Header>Sign In To Your Account</Header>
            <Input placeholder='Username' required />
            <PasswordInput placeholder='Password' required />
            <SubmitInput value='Sign In' />
          </InputContainer>
        )}
      </Content>
    </ModalContainer>
  );
};

AccountModal.propTypes = {
  modalType: PropTypes.string,
};

export default AccountModal;
