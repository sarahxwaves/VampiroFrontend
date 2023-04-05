import React from "react";
import { Box, Typography } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useStyles } from "./styles";

type MenuItemProps = {
  item?: string;
  path?: string;
  id: string;
  handleClickScroll: (id: string) => void;
};
const MenuItemButton = ({
  item,
  id,
  handleClickScroll,
}: MenuItemProps): JSX.Element => {
  const classes: ClassNameMap = useStyles();

  return (
    <>
      <Box>
        <Box className={classes.buttonText}>
          <Box onClick={() => handleClickScroll(id)} key={item}>
            <Typography variant="h6" className={classes.buttonText}>
              {item}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MenuItemButton;
