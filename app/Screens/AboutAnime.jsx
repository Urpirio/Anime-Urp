import { useEffect, useState } from "react";
import { View,Text, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import { styleMasInformacion } from "../Style/Style - General/styleMasInformacion";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";

export default function AboutAnime() {

  const route = useRoute();
  const { BackGround,AboutSerie,UrlApi } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      
        <ImageBackground source={{uri: BackGround}} style={styleMasInformacion.imageBackground}/>
        <View style={styleMasInformacion.BodyContainer}>
            <View style ={styleMasInformacion.filterContainer}>

            </View>
          <View style={styleMasInformacion.MainContainer}>
            <View style={{padding:20}}>
              <Text style={{fontSize: 20,fontWeight: 600}}>Resumen de la Historia</Text>
              <Text style={{fontSize: 16,color: 'gray'}}>{AboutSerie}</Text>
            </View>
            <View style={styleMasInformacion.BtnContainer} >
              
              <TouchableOpacity style={styleMasInformacion.BtnSagas} onPress={()=>{
                navigation.navigate('capitulos',{
                  UrlApi: UrlApi,
                })
              }}>
                <Text style={styleMasInformacion.TextSagas}>Sagas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styleMasInformacion.BtnVerPersonajes}>
                <Text style={styleMasInformacion.TextVerPersonajes}>Ver personajes</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
    </SafeAreaProvider>
  )
};


