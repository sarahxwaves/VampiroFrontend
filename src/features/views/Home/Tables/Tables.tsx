import React from "react";
import { Box, Typography } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useStyles } from "./styles";
import SkullFigure from "../../../../assets/images/skull-figure.png";
import BringFigure from "../../../../assets/images/bring-figure.png";
import Dice from "../../../../assets/svg/Dice";
import ButtonMain from "../../../../shared/components/Button/ButtonMain";
import Footer from "../../../../shared/components/Fotter/Footer";

const Tables = () => {
  const classes: ClassNameMap = useStyles();

  const cards = [
    {
      title: "Jogadores",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sedvitae tortor gravida, faucibus dolor ut, fermentum eros. Nuncmollis lacus vitae mauris feugiat vulputate.",
    },
    {
      title: "Mestres",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sedvitae tortor gravida, faucibus dolor ut, fermentum eros. Nuncmollis lacus vitae mauris feugiat vulputate.",
    },
  ];

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.contentContainer}>
          <Box className={classes.skull}>
            <img src={SkullFigure} />
          </Box>
          <Box className={classes.textContainer}>
            <Typography className={classes.homeText}>Mesas</Typography>
            <Typography className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              quam metus, lacinia ac varius a, cursus vitae velit. Morbi mollis
              nunc et ultrices suscipit. Proin sit amet erat velit. Duis
              bibendum lorem sit amet purus elementum, in pretium erat
              dignissim. Etiam a egestas turpis. Nulla sodales, ante vitae
              mollis varius, turpis massa sodales arcu, vel accumsan nulla urna
              vel urna. Nullam interdum, augue vel molestie mattis in pretium
              erat dignissim. Etiam a egestas turpis. Nulla sodales, ante vitae
              mollis varius, turpis massa sodales arcu, vel accumsan nulla urna
              vel urna. Nullam interdum, augue vel molestie mattis
            </Typography>
            <ButtonMain text="Cadastre-se"></ButtonMain>
          </Box>
        </Box>
      </Box>
      <Box className={classes.bring}>
        <img src={BringFigure} width={"fit-content"} />
      </Box>
      <Footer></Footer>
    </>
  );
};

export default Tables;
