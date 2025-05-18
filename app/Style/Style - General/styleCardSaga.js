import { StyleSheet } from "react-native";

export const styleCardSaga = StyleSheet.create({
    Container:{
        borderWidth: 0,
        boxShadow: '0px 0px 1px 0px gray',
        padding: 10,
        gap: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    HeaderCard:{
        gap: 10
    },
    TextSerie:{
        color: 'gray'
    },
    TextSaga:{
        fontSize: 20,
        fontWeight: 600,
    },
    MainCard:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    TextEpisodios:{
        color: 'gray'
    },
    BtnVerCapitulos:{

    },
    TextBtnVerCapitulos:{
        color: 'blue'
    },

})