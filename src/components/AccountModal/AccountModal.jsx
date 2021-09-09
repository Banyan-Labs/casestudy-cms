import React from 'react';
import {
  ModalContainer,
  Content,
  Header,
  Input,
  PasswordInput,
  EmailInput,
  SubmitInput,
} from './style';
import PropTypes from 'prop-types';

const AccountModal = ({ modalType }) => {
  return (
    <ModalContainer>
      <Content>
        {modalType === 1 ? (
          <div>
            <Header>Sign Up For An Account</Header>
            <EmailInput placeholder='Email' required />
            <br />
            <Input placeholder='Username' required />
            <br />
            <PasswordInput placeholder='Password' required />
            <br />
            <br />
            <SubmitInput value='Sign Up' />
          </div>
        ) : (
          <div>
            <Header>Sign In To Your Account</Header>
            <Input placeholder='Username' required />
            <br />
            <PasswordInput placeholder='Password' required />
            <br />
            <br />
            <SubmitInput value='Sign In' />
          </div>
        )}
      </Content>
    </ModalContainer>
  );
};

AccountModal.propTypes = {
  modalType: PropTypes.string,
};

export default AccountModal;
