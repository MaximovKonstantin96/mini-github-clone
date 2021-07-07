import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Root>
      <Title>Github</Title>
    </Root>
  );
};

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

const Root = styled.header`
  display: flex;
  padding: 10px 30px;
  background: skyblue;
`;

export default Header;
