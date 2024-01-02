import React from "react";
import Button from "react-bootstrap/Button";

export const CustomButton = ({
  variant = "primary",
  children,
  ...restProps
}) => {
  return (
    <Button variant={variant} {...restProps}>
      {children}
    </Button>
  );
};
