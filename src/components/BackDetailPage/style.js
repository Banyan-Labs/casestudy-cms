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
  top: 0;
  left: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  text-decoration: underline;
  font-size: 50px;
  align-items: center;
  background-color: #9fb5d5;
  border: 1px black solid;
  button {
    font-size: 15px;
    border-radius: 5px;
    font-family: candara;
    margin-left: 40px;
    margin-bottom: 10px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
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
