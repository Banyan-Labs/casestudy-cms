import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e4e4e4;
  padding-top: 4%;
  padding-bottom: 30px;
  font-family: candara;
`;

export const Header = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: center;
  text-decoration: underline;
  font-size: 50px;
  /* align-items: center; */
  button {
    font-size: 15px;
    border-radius: 5px;
    font-family: candara;
    margin-left: 50px;
  }
`;

export const Image = styled.img`
  margin: 2% auto 2% auto;
  width: 600px;
  border-radius: 5px;
  border: 1px black solid;
`;

export const Label = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 15%;
  font-size: 22px;
  text-decoration: underline;
`;

export const Text = styled.div`
  display: flex;
  width: 70%;
  height: auto;
  margin: 2% auto;
`;
