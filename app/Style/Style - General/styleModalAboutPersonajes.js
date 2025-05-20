import { StyleSheet } from "react-native";

export const styModalAboutPersonajes = StyleSheet.create({
    BodyContainer:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    BlurContainer:{
        flex:1,width:'100%',
        backgroundColor:"white",
        opacity:0.5
    },
    MainContainer:{
        height:'100%',
        position: 'absolute',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
    },
    CardContainer:{
        backgroundColor:'white',
        width:'100%',
        alignItems:'center',
        height:'50%',
        borderWidth:1,
        borderColor:'#ced4da',
        borderRadius:20,
        justifyContent:'space-between',
        boxShadow:'1px 0px 0px 0px #ced4da'
    },
    TextContainer:{
        padding: 10
    },
    View1TextContainer:{
        borderWidth:0
    },
    Nombre:{
        fontSize:30
    },
    Descripcion:{
        fontSize:18,color:'gray'
    },
    View2TextContainer:{
        borderWidth:0
    },
    Edad:{
        fontSize:16,fontWeight: 600
    },
    Raza:{
        fontSize:16,fontWeight: 600
    },
    BtnCloseModal:{
        borderWidth:1,
        borderColor:'#d00000',
        width:'100%',
        justifyContent:'center',
        alignItems:"center",
        padding:10,
        borderBottomLeftRadius: 19,
        borderBottomRightRadius: 19,
        backgroundColor:'#d00000',
    },
    TextBtnCloseModal:{
        color:'white'
    }

});