import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundColor: "#121212",
      padding: 0,
      height: "fit-content",
      minHeight: "100vh",
      color: "#FBF7F4",
    },

    homeText: {
      fontSize: 46,
      color: "#FBF7F4",
      fontFamily: "Cormorant SC",
      borderBottom: "2px solid #B29D34",
      lineHeight: 1,
      width: 30,
    },
    textContainer: {
      width: "70%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 100,
      // flexDirection: "column",
    },

    contentContainer: {
      marginLeft: 100,
      display: "grid",
      gap: 120,
      gridTemplateColumns: "2fr 1fr",
    },
    description: {
      fontSize: 18,
      fontFamily: "Poppins",
      marginTop: 60,
    },
    cardContainer: {
      display: "flex",
      gap: 50,
      marginTop: 100,
    },
    card: {
      border: "2px solid #FBF7F4",
      borderRadius: 16,
      width: 240,
      height: 320,
      padding: 18,
      fontFamily: "Poppins",
      textAlign: "center",
      position: "relative",
    },
    cardTitle: {
      color: "#72171A",
      fontWeight: 600,
      fontSize: 28,
      fontFamily: "Poppins",
      marginTop: 20,
    },
    cardDescription: {
      fontSize: 15,
      fontFamily: "Poppins",
      marginTop: 20,
    },
    circle: {
      position: "absolute",
      height: 60,
      width: 60,
      marginTop: 0,
      marginLeft: 130,
      // marginlLeft: 500,
      border: "2px solid",
      borderRadius: 100,
      transform: "translateX(-100%) translateY(-80%)",
      backgroundColor: "#121212",
      "&:hover": {
        backgroundColor: "#72171A",
      },
    },
    img: {
      marginBottom: 0,
    },
    dice: {
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
