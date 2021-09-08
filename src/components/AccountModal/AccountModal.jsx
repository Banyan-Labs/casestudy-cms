import React from 'react';
import { ModalContainer, Content } from './style';
import PropTypes from 'prop-types';

export const AccountModal = ({ modalType }) => {
  return (
    <ModalContainer>
      <Content>
        {modalType === 0 ? (
          <div>
            <h1>Sign Up For An Account</h1>
            <label>Email</label>
            <input type='text' id='email' name='email' required />
            <br />
            <label>Username</label>
            <input type='text' id='username' name='username' required />
            <br />
            <label>Password</label>
            <input type='password' id='password' name='password' required />
            <br />
            <br />
            <input id='submit' type='submit' value='Sign Up' />
            <br></br>
            <a href='' className='closeBtn' onClick={() => this.closeModal()}>
              close
            </a>
          </div>
        ) : (
          <div>
            <h1>Sign In To Your Account</h1>
            <label>Username</label>
            <input type='text' id='username' name='username' required />
            <br />
            <label>Password</label>
            <input type='password' id='password' name='password' required />
            <br />
            <br />
            <input id='submit' type='submit' value='Sign In' />
            <br></br>
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
  setModalType: PropTypes.string,
};

export default AccountModal;
