import React from "react";
import { ModalContainer, H2, Content } from './style';
import './style.js';


const SignUpModal = ({ type }) => {

    return (
        <ModalContainer>
            <Content>
                {type === 1 ? <div>
                    <h1>Sign up</h1>
                    <input />
                    <input />
                    <button />
                </div> : <div>
                    <h1>Sign In</h1>
                    <input />
                    <input />
                    <button />
                </div>}
            </Content>
        </ModalContainer>

    )
}

export default SignUpModal;