import React from "react";
import { Box, Typography } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useStyles } from "./styles";
import AboutFigure from "../../../../assets/images/about-figure.png";
import Dice from "../../../../assets/svg/Dice";

const About = () => {
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
          <Box className={classes.textContainer}>
            <Typography className={classes.homeText}>Sobre</Typography>
            <Typography className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              quam metus, lacinia ac varius a, cursus vitae velit. Morbi mollis
              nunc et ultrices suscipit. Proin sit amet erat velit. Duis
              bibendum lorem sit amet purus elementum, in pretium erat
              dignissim. Etiam a egestas turpis. Nulla sodales, ante vitae
              mollis varius, turpis massa sodales arcu, vel accumsan nulla urna
              vel urna. Nullam interdum, augue vel molestie mattis
            </Typography>
            <Box className={classes.cardContainer}>
              {cards.map((card) => (
                <>
                  <Box className={classes.card}>
                    <Box className={classes.circle}>
                      <Box className={classes.dice}>
                        <Dice></Dice>
                      </Box>
                    </Box>
                    <Typography className={classes.cardTitle}>
                      {card.title}
                    </Typography>
                    <Typography className={classes.cardDescription}>
                      {card.description}
                    </Typography>
                  </Box>
                </>
              ))}
            </Box>
          </Box>

          <Box className={classes.img}>
            <img src={AboutFigure} width={"fit-content"} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
