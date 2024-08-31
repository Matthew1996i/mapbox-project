import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 25%;
  height: 50%;
  flex-direction: column;
  padding: 2% 30px;
  margin-top: 15%;
  border-radius: 10px;
  background-color: #fff;

  label {
    color: #abb056;
  }

  .mantine-Input-input {
    background-color: #c6c6c6;
    border: none;
    color: #fff;

    ::placeholder {
      color: #fff;
    }

    &::placeholder {
      color: #fff;
    }

    &:focus {
      color: #fff;
    }
  }
`;
