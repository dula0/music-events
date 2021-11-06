import React from "react";
import { BiSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 42px;
`;

const Toggle = ({ theme, toggleTheme }: any) => {
  return (
    <Container onClick={toggleTheme}>
      {theme === "dark" ? (
        <BiSun color="yellow" size={32} />
      ) : (
        <FaMoon size={32} />
      )}
    </Container>
  );
};

export default Toggle;
