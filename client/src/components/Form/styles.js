import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
const theme = createTheme();
export default makeStyles(() => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    form_layer: {
        padding: theme.spacing(1),
        backgroundColor: "white",
        border: "2px solid black",
        marginRight: '15px',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: '10px !important',
    },
    [theme.breakpoints.down('sm')]: {
        buttonSubmit: {
            fontSize: "10px !important"
        },
        form_layer: {
            height: "80vh !important"
        },
        fileInput: {
            marginLeft: '-15px',
        },
    },

}));