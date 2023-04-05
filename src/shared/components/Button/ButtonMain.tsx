import React from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useStyles } from "./styles";

type ButtonMainProps = {
  text?: string;
  path?: string;
  className?: string;
  variant?: "text" | "outlined" | "contained";
};
const ButtonMain = ({
  text,
  className,
  variant = "outlined",
}: ButtonMainProps): JSX.Element => {
  const classes: ClassNameMap = useStyles();

  return (
    <>
      <Button
        variant={variant}
        className={className ? className : classes.container}
      >
        <Typography className={classes.text}>{text}</Typography>
      </Button>
    </>
  );
};

export default ButtonMain;
