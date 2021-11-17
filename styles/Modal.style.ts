import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: teal;
  color: tan;
`;
export const ModalBody = styled.div`
  width: 22vw;
  height: 30vh;
  border-radius: 15px;
  padding: 20px;
  z-index: 100;
  background-color: navy;
  box-shadow: 6px 16px 50px #797b25;
`;
export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;
export const Content = styled.div`
  padding-top: 10px;
`;
