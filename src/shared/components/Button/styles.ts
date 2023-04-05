import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      backgroundColor: "#23101B",
      justifyContent: "center",
      alignItems: "center",
      height: 75,
      borderRadius: 16,
      width: 250,
      "&:hover": {
        backgroundColor: "#72171A",
      },
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
  })
);
