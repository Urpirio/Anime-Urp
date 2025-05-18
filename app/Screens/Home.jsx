import { FlatList, Text } from "react-native";
import CardAnimes from "../Components - Screens/CardAnimes";
import { HomeStyle } from "../style - Home/HomeStyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";


export default function HomeScreen() {

  const navigation = useNavigation();
  const [StatusAnimeDisponibles, setStatusAnimeDisponibles] = useState(false);
  const [animeDisponibles,setanimeDisponibles] = useState([])
  const url = 'https://randomapi.com/api/b32bbcd99e48a9795bd999ff30f829db';

  useEffect(()=>{
    const AnimeDisponibles = () =>{
      fetch(url)
      .then( respuesta => respuesta.json())
      .then((Data)=>{
        
        setanimeDisponibles(Data.results[0].AnimeDisponibles)

      })
      .catch((error)=>{
        console.log(error)
      })
      .finally(()=>{
            setStatusAnimeDisponibles(true)
      })
    };
    AnimeDisponibles();
  })

  if(!StatusAnimeDisponibles){
    return(
    <SafeAreaProvider style={HomeStyle.Container}>
        <Text>Cargando...</Text>
    </SafeAreaProvider>
    )
  }

  
  return (
    <SafeAreaProvider style={HomeStyle.Container}>
       <FlatList
        style = {HomeStyle.ListContainer}
        data={animeDisponibles}
        renderItem={({item})=>{
        return(
        <CardAnimes 
          TitleAnime={item.TitleAnime} 
          FunctionVerInfo={()=>{
            navigation.navigate(item.LinkScreen)
          }}
          FunctionVerCapi={()=>{
            navigation.navigate(item.IdCapitulos,{
              Anime: item.TitleAnime,
              image: item.BackGround,
              UrlApi: item.UrlApi,
            });
          }}
          ImgAnime={item.ImageDBZ}
          Description={item.Descripcion}
          />)
       }}
       />
    </SafeAreaProvider>
  )
};
