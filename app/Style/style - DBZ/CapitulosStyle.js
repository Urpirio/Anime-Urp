import { StyleSheet } from "react-native";

export const CapitulosStyle = StyleSheet.create({
    
    BodyContainer:{
        borderWidth: 1,
        justifyContent:'flex-start',
        flex: 1
    },
    BtnModal:{
        flex:1,
        opacity: 0.5,
        backgroundColor: 'gray',
        filter: 'blur(10xp)',
        zIndex: 20
    },
    GeneralBodyModal:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    BodyModal:{
        position: 'absolute',
        zIndex: 30,
        height:'60%',
        width: '100%',
        backgroundColor:'white',
        paddingTop: 20,
        borderTopRightRadius: 5,
        borderTopLeftRadius:5,
        boxShadow: '0px 5px 0px 5px gray',
    },
    ListCardModal:{
        paddingHorizontal:10
    },
    Cardinlist:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: '#adb5bd',
        marginBottom: 10,
        borderRadius: 10,
        boxShadow:'0px 0px 1px 0px gray'
     },
     CardInlistHeader:{
        gap: 10,
        width: '80%'
    },
    TextTitleCap:{
        fontSize: 16,
        fontWeight: 600,
        width: '80%'
    },
    TextNumerCap:{
        color:'gray'
    },
    BtnInCardList:{
        borderWidth: 0,
        paddingVertical: 25,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#38b000' 
    },
    TextBtn:{
        color:'white'
    }
                                 
    

})