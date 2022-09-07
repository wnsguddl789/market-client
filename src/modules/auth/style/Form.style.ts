import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex: 1;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    width: 100%;
    border: none;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    background-color: #f67600;
    color: white;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    cursor: pointer;
  }
  span {
    font-size: 16px;
    a {
      color: #767d88;
      :hover {
        color: #f67600;
      }
    }
  }
`;

const FormItem = styled.div`
  width: 50%;
  @media (max-width: 800px) {
    width: 60%;
  }
  @media (max-width: 700px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  display: flex;
  align-items: center;
  label {
    width: 30%;
    @media (min-width: 1010px) {
      width: 20%;
    }
    @media (min-width: 1300px) {
      width: 10%;
    }
    font-size: 14px;
    text-decoration: none;
    margin-right: 10px;
    color: #767d88;
    @media (max-width: 500px) {
      width: 20%;
    }
  }
  input {
    width: 70%;
    @media (min-width: 1010px) {
      width: 80%;
    }
    @media (min-width: 1300px) {
      width: 90%;
    }
    padding: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: #e8f0fe;
    @media (max-width: 500px) {
      width: 80%;
    }
  }
`;

export { Form, FormItem };
