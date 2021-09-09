import React from 'react';
import { ModalContainer, Content, Header } from './style';
import PropTypes from 'prop-types';

const AccountModal = ({ modalType }) => {
  return (
    <ModalContainer>
      <Content>
        {modalType === 0 ? (
          <div>
            <Header>Sign Up For An Account</Header>
            <input type='text' placeholder='Email' required />
            <input type='text' placeholder='Username' required />
            <input type='password' placeholder='Password' required />
            <input type='submit' value='Sign Up' />
            <a href='' className='closeBtn' onClick={() => this.closeModal()}>
              close
            </a>
          </div>
        ) : (
          <div>
            <Header>Sign In To Your Account</Header>
            <input type='text' placeholder='Username' required />
            <input type='password' required />
            <input type='submit' value='Sign In' />
            <a href='' onClick={() => this.closeModal()}>
              close
            </a>
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
