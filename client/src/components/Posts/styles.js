import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
const theme = createTheme();
export default makeStyles(() => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
    post_layer: {
        backgroundColor: "lightblue",
        border: "2px solid black",
        marginLeft: "15px",
        paddingBottom: "16px",
    },
    [theme.breakpoints.down('sm')]: {
        post_layer: {
            height: "fit-content !important",
        }
    }
}));
