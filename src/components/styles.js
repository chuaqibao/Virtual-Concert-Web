import { makeStyles, withTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    
    // Home Page

    // Timer Section

    timeGrid: {
        // borderStyle:"solid",
        // borderColor:"black",
        paddingTop:10,
        paddingBottom:0,
    },
    numGrid: {
        paddingTop:0,
        paddingBottom:0,
        // borderStyle:"solid",
        // borderColor:"pink",
    },
    timeBox: {
        backgroundColor:"#FFF",
        color:"black",
        justifyContent:'center',
        padding:30,
        margin:20,
        marginBottom:20,
        minWidth:150.73,
        maxWidth:150.73,
        alignItems:"center",
        alignContent:"center",
        textAlign: 'center',
        opacity:0.65,
        borderRadius: 100,
    },
    numBox: {
        color:"white",
        justifyContent:'center',
        padding:0,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        minWidth:150.73,
        maxWidth: 150.73,
        alignItems:"center",
        alignContent:"center",
        textAlign: 'center',
        
    },
    timeNumber: {
        fontSize:50,
        fontWeight:"bold",
        paddingBottom:5,
    },
    timeWords: {
        fontSize: 22,
        outlineColor: "black"
    }
}));