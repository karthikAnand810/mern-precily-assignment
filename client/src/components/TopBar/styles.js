import { makeStyles } from "@mui/styles";
export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '20px 0',
        display: 'flex !important',
        flexDirection: 'row !important',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
    },
    image: {
        marginLeft: '15px',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
}));