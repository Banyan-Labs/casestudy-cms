import React from "react";
import { ModalContainer, Content } from './style';
import './style.js';


const SignUpModal = ({ modalType }) => {

    return (
        <ModalContainer>
            <Content>
                {modalType === 1 ? <div>
                    <h1>Sign Up For An Account</h1>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" required />
                    <br />
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required />
                    <br />
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    <br />
                    <br />
                    <input id="submit" type="submit" value="Sign Up" />
                </div> : <div>
                    <h1>Sign In To Your Account</h1>
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required />
                    <br />
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    <br />
                    <br />
                    <input id="submit" type="submit" value="Sign In" />
                </div>}
            </Content>
        </ModalContainer>

    )
}

export default SignUpModal;