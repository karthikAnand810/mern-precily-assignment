import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
const theme = createTheme();
export default makeStyles(() => ({
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column !important"
        }
    },
    sub_comp: {
        display: "flex",
    }
}
));