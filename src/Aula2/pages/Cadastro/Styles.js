import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  background-color: #d6c9e3;
  text-align: center;
  padding: 20px;
`;

const handleInputBgColor = isActive => {
  switch (isActive) {
    case true:
      return "green";
    case false:
      return "red";
    case undefined: 
      return "#c2c2c2";
  }
}

export const Input = styled.input`
  width: 250px;
  height: 50px;
  margin: 5px;
  border: 3px solid ${({isActive}) => handleInputBgColor(isActive)};
`;

export const Button = styled.button`
  background-color: #c2c2c2;
  width: 100px;
  height: 50px;
`;