import { FlatList, Text, View } from "react-native";
import CardAnimes from "../Components - Screens/CardAnimes";
import { HomeStyle } from "../Style/style - Home/HomeStyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";

export let AboutThisAnime;

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

    

  });

 

  

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
            navigation.navigate(item.LinkScreen,{
              AnimeTitle: item.TitleAnime,
              BackGround: item.BackGround,
              AboutSerie: item.ResumenAnime,
              UrlApi: item.UrlApi,
              Linkscreen: item.IdCapitulos,
              ApiPersonajes: item.PersonajesApi,
            });
            AboutThisAnime = item.TitleAnime;
          }}
          FunctionVerCapi={()=>{
            navigation.navigate(item.IdCapitulos,{
              Anime: item.TitleAnime,
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
