import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
const theme = createTheme();
export default makeStyles(() => ({
    footer_main: {
        backgroundColor: "rgba(189, 60, 221, 0.692)",
        border: "2px solid black",
        marginTop: "15px",
        width: "100%",
        fontFamily: "Grandstander, cursive",
        textAlign: "center",
    },
    paragraphy: {
        fontSize: "18px",
        fontWeight: "bold",
        width: "100% !important"
    },
    [theme.breakpoints.down('sm')]: {
        footer_main: {
            height: "75vh !important"
        },
        paragraphy: {
            fontSize: "15px",
        }
    },

}))