import { Button } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";

type StyledButton = {
  color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning",
  onClick: MouseEventHandler<HTMLButtonElement>,
  disabled: boolean,
  children: ReactNode,
  style: object,
}

export const StyledButton = ({color, children, onClick, disabled, style}: StyledButton) => {
  return <Button
    disabled={disabled}
    variant="contained"
    color={color}
    style={{...style, padding: 20, borderRadius: 40}}
    onClick={onClick}
  >
    {children}
  </Button>
}