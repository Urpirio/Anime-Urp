import { StyleSheet } from "react-native";

export const CardAnimesStyle = StyleSheet.create({
    Container:{
        // flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        padding:5,
        marginVertical: 10,
        width: '100%',
        justifyContent: 'space-between',
        // gap: 10,
        borderColor: '#adb5bd',
        boxShadow: '0px 0px 3px 0px #adb5bd'
    },
    ContainerImg:{
        width: '100%',
        
    },
    Img:{
        height: 350,
        width: '100%',
        borderRadius: 5,
        objectFit: 'cover',
        justifyContent: 'center'
    },
    ContainerMain:{
        width: '100%',
        justifyContent:'space-between',
        borderRadius: 5,
    },
    ContainerText:{
        width:'100%',
    },
    Title:{
        fontSize: 20,
        fontWeight: 600,
    },
    Description:{
        color: 'gray'
    },
    ContainerBtn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    BtnVerMasInformacion:{
        width: '49%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor:'#adb5bd',
        paddingVertical: 10,
    },
    TextVerMasInformacion:{
        color: 'white'
    },
    BtnVerCapitulos:{
        width: '49%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#00a6fb',
        borderRadius: 5,
        paddingVertical: 10,
    },
    TextVerCapitulos:{
        color: 'white',
    }

})