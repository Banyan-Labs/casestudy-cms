import styled from 'styled-components';

export const HomepageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e4e4e4;
  padding-bottom: 3%;
  .signUpBtn {
    position: absolute;
    right: 20%;
    top: 5%;
    width: 150px;
    height: 40px;
    background-color: #9fb5d5;
    font-size: 20px;
  }
  .signInBtn {
    position: absolute;
    right: 33%;
    top: 5%;
    width: 150px;
    height: 40px;
    background-color: #9fb5d5;
    font-size: 20px;
  }
`;

export const CreateNewButton = styled.button`
  position: absolute;
  right: 20%;
  top: 5%;
  width: 150px;
  height: 40px;
  font-size: 15px;
  background-color: #9fb5d5;
  #link {
    text-decoration: none;
    color: black;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
  padding-top: 10%;
`;
export const CardBody = styled.div`
  width: 50%;
  height: 300px;
  background-color: #9fb5d5;
  display: flex;
  flex-direction: row;
  margin: 5% auto 0% auto;
  border: 1px black solid;
  padding: 0% 1% 0% 5%;
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
`;
export const CardName = styled.div`
  font-size: 40px;
  font-weight: normal;
`;
export const CardDescription = styled.div`
  font-size: 20px;
  font-weight: normal;
`;
export const CardLogo = styled.div`
  width: 400px;
  padding: 10%;
`;
export const CardImage = styled.div`
  display: flex;
`;
