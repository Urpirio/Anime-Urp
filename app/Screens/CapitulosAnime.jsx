import { FlatList, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import Sagas from "../Components - Screens/Sagas";
import { useEffect, useState } from "react";
import { CapitulosStyle } from "../Style/style - DBZ/CapitulosStyle";
import ModalCapitulos from "../components - Modal/ModalCapitulos";


export default function CapitulosAnime() {

    const route = useRoute();
    const { Anime,image,UrlApi } = route.params;

    const [ShowModal, setShowModal] = useState(false);
    const [IdSaga,setIdSaga] = useState(null);
    const [DataContent,setDataContent] = useState([]);
    const [DataStatus,setDataStatus] = useState(false);

    useEffect(()=>{
        const ListElements = () => {
            fetch(UrlApi)
            .then(respuesta => respuesta.json())
            .then((Data)=>{
                setDataContent(Data.results[0].Sagas);
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                setDataStatus(true);
            })
        };
        ListElements();
    });






  if(!DataStatus){
    return(
        <SafeAreaProvider style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
            <View>
                <Text>Cargando...</Text>
            </View>
        </SafeAreaProvider>
    )
  }

  return (
    <SafeAreaProvider style={CapitulosStyle.BodyContainer}>
        <FlatList
        data={DataContent}
        renderItem={({item})=>{
            return(
                <Sagas
                Serie={item.Serie}
                NombreSaga={item.Saga}
                Episodios={item.Cantidad_Episodios}
                FunctionModal={()=>{
                    setShowModal(!ShowModal);
                    setIdSaga(item.id)
                }}
                />
            )
        }}
        />
        <ModalCapitulos
        FunctionCloseModal={()=>{setShowModal(!ShowModal)}}
        ModalStatus={ShowModal}
        IdSaga={IdSaga}
        Data={DataContent}
        />
    </SafeAreaProvider>
  )
}
