import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e4e4e4;
  padding-top: 3%;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: left;
    padding-left: 20%;
  }
  p {
    text-align: left;
    padding-left: 20%;
    padding-bottom: 2%;
  }
`;

export const Label = styled.label`
  font-size: 20px;
  display: flex;
  padding-right: 20%;
  padding-left: 20%;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 55%;
  height: 30px;
  padding: 10px;
  margin-left: 20%;
  margin-bottom: 2%;
  font-size: 16px;
  border: 1px solid #ccc;
  border-width: 2px;
  border-style: inset;
  border-color: (rgb(118, 118, 118), rgb(133, 133, 133));
`;

export const Textarea = styled.textarea`
  width: 55%;
  height: 150px;
  font-size: 16px;
  margin-left: 20%;
  margin-bottom: 2%;
  padding: 12px;
  border: 1px solid #ccc;
  resize: none;
  border-width: 2px;
  border-style: inset;
  border-color: (rgb(118, 118, 118), rgb(133, 133, 133));
`;

export const Button = styled.button`
  width: 10%;
  display: block;
  margin: 5% auto;
  font-size: 20px;
  background-color: #9fb5d5;
`;
