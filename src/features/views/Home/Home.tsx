import React, { useState } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useStyles } from "./styles";
import Header from "../../../shared/components/Header/Header";
import HomeFigure from "../../../assets/images/home-figure.png";
import "../../../index.css";
import ButtonMain from "../../../shared/components/Button/ButtonMain";
import About from "./About/About";
import Tables from "./Tables/Tables";

const Home = () => {
  const classes: ClassNameMap = useStyles();

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box>
        <Header handleClickScroll={handleClickScroll} />
      </Box>

      <Box className={classes.container}>
        <Box className={classes.contentContainer}>
          <Box className={classes.homeTitle}>
            <Box className={classes.textContainer}>
              <Typography className={classes.homeText}>
                Encontre jogadores, mestres e mesas.
              </Typography>
              <Typography className={classes.homeText}>Have FUN</Typography>
              <Box className={classes.button}>
                <ButtonMain text={"Cadastre-se"} variant="outlined" />
              </Box>
            </Box>
            <Box>
              <img src={HomeFigure} alt="Paris" width={"100%"} />
            </Box>
          </Box>
        </Box>
        <Box id="about">
          <About />
        </Box>
        <Box id="table">
          <Tables />
        </Box>
      </Box>
    </>
  );
};

export default Home;
