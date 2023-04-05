import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      backgroundColor: "#23101B",
      height: 250,
      minWidth: "100vh",
      zIndex: 10,
      position: "relative",
      padding: 20,
      gap: 16,
    },
    buttons: {
      display: "flex",
      gap: 20,
    },
    text: {
      fontSize: 22,
      color: "#FBF7F4",
      fontWeight: 400,
      fontFamily: "Poppins",
    },
    section: {
      display: "column",
      color: "#FBF7F4",
      minWidth: "200px",
      width: "50%",
      textAlign: "center",
    },
    sectionTitle: {
      fontSize: 22,
      fontFamily: "Poppins",
      textAlign: "center",
      padding: 8,
      marginBottom: 25,
    },
    sectionDescription: {
      fontSize: 18,
      fontFamily: "Poppins",
      fontWeight: 200,
    },
    verticalLine: {
      borderLeft: "6px solid #B29D34",
      height: "200px",
      alignSelf: "center",
    },
    copyright: {
      height: 30,
      backgroundColor: "#72171A",
      color: "#FBF7F4",
      alignContent: "center",
      fontFamily: "Poppins",
    },
    sectionHome: {
      display: "column",
      color: "#FBF7F4",
      minWidth: "200px",
      width: "50%",
      justifyContent: "center",
      gap: 20,
    },
    socialMedia: {
      display: "flex",
      gap: 16,
      justifyContent: "center",
    },
    button: {
      backgroundColor: "#72171A",
      heigth: 60,
      "&:hover": {
        backgroundColor: "#A93F55",
      },
    },
  })
);
