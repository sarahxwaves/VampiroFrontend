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
import DarkPack from "../../../assets/images/darkpack-figure.png";
import Us from "../../../assets/images/us-logo-figure.png";
import Instagram from "../../../assets/svg/Instagram";
import Twitter from "../../../assets/svg/Twitter";
import Facebook from "../../../assets/svg/Facebook";
import ButtonMain from "../Button/ButtonMain";

type ButtonMainProps = {
  text?: string;
  path?: string;
};
const Footer = ({ text }: ButtonMainProps): JSX.Element => {
  const section = ["Home", "Sobre", "Login"];
  const classes: ClassNameMap = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.sectionHome}>
          <Typography className={classes.sectionTitle}>Início</Typography>
          {section.map((item) => (
            <Typography className={classes.sectionDescription}>
              {item}
            </Typography>
          ))}
        </Box>
        <Box className={classes.verticalLine}></Box>
        <Box className={classes.section}>
          <Typography className={classes.sectionTitle}>Contato</Typography>
          <Box className={classes.socialMedia}>
            <Instagram />
            <Twitter />
            <Facebook />
          </Box>
        </Box>

        <Box className={classes.verticalLine} />
        <Box className={classes.section}>
          <Typography className={classes.sectionTitle}>
            Ingresse no mundo de Vampiro
          </Typography>
          <ButtonMain
            variant={"contained"}
            className={classes.button}
            text={"Cadastrar"}
          ></ButtonMain>
        </Box>
        <Box className={classes.verticalLine}></Box>
        <Box className={classes.section}>
          <img src={DarkPack} width={"100"} />
          <img src={Us} width={"100"} />
          <Typography className={classes.sectionDescription}>
            © Todos os direitos reservados - UnderDaft
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
