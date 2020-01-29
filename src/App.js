import React from "react";
import styled from "styled-components";

import { color } from "./styles/colors";

const Title = styled.h1`
  font-size: 1.5rem;
  color: ${prop => prop.theme.main};
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 4rem 0;
  background-color: papayawhip;
`;

Title.defaultProps = {
  theme: {
    main: color.indigo[600]
  }
};

const App = () => {
  return (
    <Wrapper>
      <Title>Hello World</Title>
    </Wrapper>
  );
};

export default App;
