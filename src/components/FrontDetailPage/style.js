import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e4e4e4;
  padding-top: 4%;
  padding-bottom: 30px;
  font-family: candara;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: underline;
  font-size: 50px;
`;

export const Image = styled.img`
  margin: 2% auto 2% auto;
  width: 600px;
`;

export const Label = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 15%;
  font-size: 20px;
`;

export const Text = styled.div`
  display: flex;
  width: 70%;
  height: auto;
  margin: 2% auto;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 2%;
  .bottomControlBtn {
    display: flex;
    justify-content: space-evenly;
    width: 50%;
  }
  button {
    font-size: 15px;
    font-family: candara;
    border-radius: 5px;
  }
`;
