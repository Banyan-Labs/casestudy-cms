import styled from 'styled-components';

export const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color:#e4e4e4;
    padding-bottom: 30px;
    h1 {
        text-decoration: underline;
    }
    img {
        border: solid black;
    }
    h3{
        text-align: left;
    }
    p {
        border: solid black;
        background: white;
        width: 800px;
        height: 100px;
        padding-right: 10px;
        padding-left: 10px;
    }
    #edit {
        float: left;
    }
    #delete {
        float: right;
    }
`;
