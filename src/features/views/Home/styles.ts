import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundColor: "#FBF7F4",
      padding: 0,
      minHeight: "100vh",
      height: "fit-content",
      scrollBehavior: "smooth",
    },
    homeTitle: {
      // padding: 80,
      display: "flex",
    },
    homeText: {
      fontSize: 42,
      color: "#424242",
      fontFamily: "Poppins",
    },
    textContainer: {
      // width: "40%",
      height: 200,
      display: "column",

      alignItems: "center",
      justifyContent: "center",
      marginTop: 100,
    },
    img: {
      width: 30,
    },
    contentContainer: {
      marginLeft: 100,
    },
    button: {
      marginTop: 80,
    },
  })
);
