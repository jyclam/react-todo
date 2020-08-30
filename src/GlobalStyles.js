import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: white;
}
`;

export default globalStyles;
