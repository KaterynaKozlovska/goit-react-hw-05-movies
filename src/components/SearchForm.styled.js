import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 20px auto 40px;
  width: 100%;
  max-width: 300px;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  width: 200px;
  padding: 6px 10px;
  font: inherit;
  font-size: 14px;
  line-height: 1.33;
  outline: none;
  border: none;
  ::placeholder {
    font: inherit;
    font-size: 16px;
  }

  :hover,
  :focus {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2) inset,
      0px 2px 2px 0px rgba(0, 0, 0, 0.14) inset,
      0px 1px 5px 0px rgba(0, 0, 0, 0.12) inset;
  }
`;

const FormBtn = styled.button`
  display: inline-block;
  text-align: center;
  width: 80px;
  padding: 6px;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;
  color: rgb(42, 42, 42);
  background-color: rgba(42, 42, 42, 0.1);
  text-decoration: none;

  :hover,
  :focus {
    color: #fff;
    background-color: #090979;
  }
`;

export { Form, Input, FormBtn };
