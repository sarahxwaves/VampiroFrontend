import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundColor: "#FBF7F4",
      padding: 0,
      height: "fit-content",
      minHeight: "100vh",
      color: "#424242",
    },

    homeText: {
      fontSize: 46,
      color: "#424242",
      fontFamily: "Cormorant SC",
      borderBottom: "2px solid #B29D34",
      lineHeight: 1,
      width: 30,
    },
    textContainer: {
      width: "80%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 100,
    },

    contentContainer: {
      marginLeft: 100,
      display: "grid",
      gap: 120,
      gridTemplateColumns: "1fr 2fr",
      alignItems: "center",
      marginTop: 100,
    },
    description: {
      fontSize: 18,
      fontFamily: "Poppins",
      marginBottom: 80,
      marginTop: 60,
    },

    skull: {
      marginBottom: 0,
      justifyContent: "center",
    },

    bring: {
      justifyContent: "center",
      marginLeft: "50vh",
      marginBottom: -160,
    },
  })
);
