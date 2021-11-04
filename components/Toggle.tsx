import React from "react";
import { BiSun } from "react-icons/bi";
import { GiMoonBats } from "react-icons/gi";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  border-radius: 23px;
  border: 2px solid;
  margin: 42px;
  padding: 5px;
  @media (max-width: 1235px) {
    margin: 96px 12px;
  }
  @media (max-width: 768px) {
    margin: 125px 15px;
  }
`;

const Toggle = ({ theme, toggleTheme }: any) => {
  return (
    <Container onClick={toggleTheme}>
      {theme === "dark" ? (
        <BiSun color="yellow" size={32} />
      ) : (
        <GiMoonBats size={32} />
      )}
    </Container>
  );
};

export default Toggle;
