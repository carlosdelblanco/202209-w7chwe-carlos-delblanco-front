import styled from "styled-components";

const LoginFormStyled = styled.div`
  h2 {
    padding-top: 30px;
    padding-bottom: 10px;
    color: #313335;
  }

  .loginData {
    background-color: #0077b5;
    padding-top: 0;
    margin: auto;
    padding: 10px;
    width: 300px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 20px;
  }

  label {
    text-align: initial;
    color: #fff;
  }

  form input {
    height: 50px;
    border-color: #a4a4a4;
    border-radius: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
  }

  button {
    width: 280px;
    height: 40px;
    font-size: 16px;
    color: #caccce;
    background-color: #000;
  }
`;

export default LoginFormStyled;
