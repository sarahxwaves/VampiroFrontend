import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      backgroundColor: "#72171A",
      padding: "0px, 12px",
      minWidth: 100,
      justifyContent: "flex-end",
    },
    buttons: {
      display: "flex",
      gap: 20,
    },
    buttonText: {
      fontSize: 20,
      color: "#FBF7F4",
      fontWeight: 200,
      fontFamily: "Poppins",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#72171A",
      },
    },
  })
);
