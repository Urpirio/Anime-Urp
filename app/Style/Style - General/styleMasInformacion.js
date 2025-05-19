import { StyleSheet } from "react-native";

export const styleMasInformacion = StyleSheet.create({
    imageBackground:{
        flex: 1
    },
    BodyContainer:{
        position: 'absolute',
        width: '100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    filterContainer:{
        width: '100%',
        height:'100%',
        backgroundColor: 'white',
        opacity: 0.5,
    },
    MainContainer:{
        backgroundColor:'white',
        height: '75%',
        width:'100%',
        position: 'absolute',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center' ,
        boxShadow: '0px 1px 0px 0px gray',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    TextContainer:{

    },
    TitleInTextContainer:{

    },
    PInTextContainer:{

    },
    BtnContainer:{
        flexDirection:'row', 
        borderWidth: 0,
        width:'100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    BtnSagas:{
        borderWidth: 0,
        padding: 10,
        width:'48%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#00a6fb'
    },
    TextSagas:{
        fontSize: 16,
        color: 'white'
    },
    BtnVerPersonajes:{
        borderWidth: 0,
        padding: 10,
        width:'48%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        backgroundColor: '#adb5bd'
    },
    TextVerPersonajes:{
        fontSize: 16,
        color: 'white',
    }
})