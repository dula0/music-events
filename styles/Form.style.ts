import styled from "styled-components";

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FormLabel = styled.label`
  display: block;
`;
export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
`;
