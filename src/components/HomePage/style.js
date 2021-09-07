import styled from 'styled-components';

export const HomepageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e4e4e4;
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
  .header {
    font-size: 50px;
    font-weight: 700;
    padding-top: 10%;
  }
  .cardBody {
    width: 50%;
    height: 300px;
    background-color: #9fb5d5;
    display: flex;
    flex-direction: row;
    margin: 5% auto 0% auto;
    border: 1px black solid;
    padding: 0% 1% 0% 5%;
  }
  .cardInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
  }
  .cardName {
    font-size: 40px;
    font-weight: normal;
  }
  .cardDescription {
    font-size: 20px;
    font-weight: normal;
  }
  .cardImg {
    display: flex;
  }
  .createNew {
    position: absolute;
    right: 20%;
    top: 5%;
    width: 150px;
    height: 40px;
    font-size: 15px;
    background-color: #9fb5d5;
  }
  .cardLogo {
    width: 400px;
    padding: 10%;
  }
`;
