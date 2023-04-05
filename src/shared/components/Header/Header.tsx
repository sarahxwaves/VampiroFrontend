import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useStyles } from "./styles";
import MenuItemButton from "./MenuItemButton";

type HeaderProps = {
  handleClickScroll: (id: string) => void;
};

const Header = ({ handleClickScroll }: HeaderProps): JSX.Element => {
  const classes: ClassNameMap = useStyles();

  const menu = [
    {
      id: "table",
      name: "Mesas",
    },
    {
      id: "about",
      name: "Sobre",
    },
    {
      id: "login",
      name: "Login",
    },
  ];

  return (
    <>
      <Box>
        <CssBaseline />
        <AppBar>
          <Toolbar className={classes.container}>
            <Box className={classes.buttons}>
              {menu.map((m) => (
                <MenuItemButton
                  item={m.name}
                  id={m.id}
                  handleClickScroll={handleClickScroll}
                />
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
