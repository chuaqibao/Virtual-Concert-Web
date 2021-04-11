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
        borderRadius: 1200,

        '@media (max-width: 450px)': {
            minWidth: 120.73,
            maxWidth: 120.73,
        },

        '@media (max-width: 350px)': {
            minWidth: 100.73,
            maxWidth: 100.73,
        },

        '@media (max-width: 300px)': {
            minWidth: 80.73,
            maxWidth: 80.73,
        }
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

        '@media (max-width: 450px)': {
            minWidth: 120.73,
            maxWidth: 120.73,
        },

        '@media (max-width: 350px)': {
            minWidth: 100.73,
            maxWidth: 100.73,
        },

        '@media (max-width: 300px)': {
            minWidth: 80.73,
            maxWidth: 80.73,
        }
        
    },
    timeNumber: {
        fontSize:50,
        fontWeight:"bold",
        paddingBottom:5,

        '@media (max-width: 450px)': {
            fontSize: 40
        },

        '@media (max-width: 350px)': {
            fontSize: 30
        },

        // galaxy fold: width = 280
        '@media (max-width: 300px)': {
            fontSize: 16
        }

    },
    timeWords: {
        fontSize: 22,
        outlineColor: "black"
    }

}));