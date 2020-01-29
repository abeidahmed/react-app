import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyle } from "./styles";
import App from "./App";

const Root = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
