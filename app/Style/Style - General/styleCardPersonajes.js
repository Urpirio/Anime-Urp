import { StyleSheet } from "react-native";

export const styleCardPersonajes = StyleSheet.create({
    ContainerFilter:{

    },
    ContainerList:{
        paddingHorizontal: 10
    },
    ContainerCard:{
        // borderWidth:1,
        boxShadow:'0px 0px 0px 1px #ced4da',
        marginTop: 5,
        marginBottom:10,
        borderRadius: 10,
    },
    ContainerImg:{
        alignItems:'center',
        justifyContent:'center',
    },
    ImgPersonaje:{
        height:400,
        objectFit: 'contain',
        width: 400,
    },
    ContainerBtnQuienEs:{
        // borderWidth: 1,
        alignItems:'center',
        padding:5
    },
    BtnQuienEs:{
        // borderWidth: 1,
        width:"100%",
        alignItems:'center',
        padding: 10,
        borderRadius:10,
        backgroundColor: '#118ab2',
    },
    TextBtnQuienEs:{
        color:'white'
    },
    ContainerBtnClicks:{
        // borderWidth: 1,
        alignItems:'center',
        padding: 5,
    },
    BtnClicks:{
        // borderWidth: 1,
        width: "100%",
        alignItems:'center',
        padding:10,
        borderRadius:10,
        backgroundColor: '#38b000',
    },
    TextBtnClick:{
        color:'white'
    }



})