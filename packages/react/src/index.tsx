import * as React from "react";
import { styled } from "./styles";

const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$morais500",
  borderRadius: "$md",
});

export function App() {
  return <Button>Hello World</Button>;
}
