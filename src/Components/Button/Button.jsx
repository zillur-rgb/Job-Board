import React from "react";
import { Button } from "./Button.style";

const ButtonComponent = ({ bg, color, text }) => {
  return (
    <Button bg={bg} color={color}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
