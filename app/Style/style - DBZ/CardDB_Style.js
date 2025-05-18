import { StyleSheet } from "react-native";

export const CardDB_Style = StyleSheet.create({
    ContainerList: {
        width: '100%',
        paddingHorizontal: 10,
    },
    Card:{
        alignItems: 'center',
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 20,
        width: '100%',
        paddingVertical: 5,
        backgroundColor: 'white',
        boxShadow: '0px 0px 1px 0px gray',
        borderColor: '#dee2e6',
    },
    Image:{
        objectFit: 'contain',
        height: 300,
        width: 300
    },
    TextCard:{
        fontSize: 20,
    },
    ContainerBtns:{
        flexDirection: 'row-reverse',
        width:'100%',
        justifyContent: 'space-around',
        paddingVertical: 5,

    },
    BtnIrVideos:{
        borderWidth: 0,
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',

    },
    TextBtnIrVideo:{
        fontSize: 16,
        color: 'white',
        fontWeight: 600,
    },
    BtnVermas:{
        borderWidth: 0,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#adb5bd'
    },
    TextBtnVermas:{
        fontSize: 16,
        color: 'white',
        fontWeight: 600,
    }
})