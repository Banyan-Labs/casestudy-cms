import styled from 'styled-components';

export const BackHomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Candara;
  background-color: #e4e4e4;
  padding-bottom: 3%;
  .navBar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #e4e4e4;
    z-index: 3;
  }
  .cards {
    margin-top:13%;
  }
`;

export const LogOut = styled.button`
  position: absolute;
  right: 10%;
  top: 5%;
  width: 150px;
  height: 40px;
  font-size: 20px;
  background-color: #9fb5d5;
  border-radius: 5px;
  font-family: candara;
  z-index: 10;
    position: fixed;
  #link {
    text-decoration: none;
    color: black;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10.3%;
  margin-bottom: 2%;
  input {
    width: 20%;
  }
`;

export const CreateNewButton = styled.button`
  position: absolute;
  right: 24%;
  top: 5%;
  width: 150px;
  height: 40px;
  font-size: 20px;
  background-color: #9fb5d5;
  font-family: candara;
  border-radius: 5px;
  z-index: 10;
    position: fixed;
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
  padding-top: 2%;
  padding-bottom: 2%;
  text-decoration: underline;
`;

export const CardBody = styled.div`
  width: 50%;
  height: 300px;
  background-color: #9fb5d5;
  display: flex;
  flex-direction: row;
  margin: 5% auto 0% auto;
  border: 1px black solid;
  border-radius: 5px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  padding-bottom: 5%;
`;

export const CardName = styled.div`
  font-size: 40px;
  font-weight: normal;
  padding-top: 6%;
  text-align: center;
`;

export const CardDescription = styled.div`
  font-size: 18px;
  font-weight: normal;
  overflow: auto;
  padding-top: 6%;
  text-align: center;
`;

export const CardImage = styled.div`
  display: flex;
  width: 400px;
  padding: 5%;
  img {
    width: 300px;
    height: 180px;
    border-radius: 5px;
    border: 1px black solid;
  }
`;

export const DetailButton = styled.div`
  position: relative;
  top: 82%;
  left: 70%;
  width: auto;
  height: 30px;
  background-color: lightgray;
  border: 1px black solid;
  padding: 0% 1% 0% 1%;
  line-height: 2;
  border-radius: 5px;
  .detailButtonLink {
    font-size: 16px;
    text-decoration: none;
    color: black;
  }
`;
