import { View,Text,Image,FlatList, TouchableOpacity } from "react-native";
import { CardDB_Style } from "../Style/style - DBZ/CardDB_Style";
import { useEffect,useState } from "react";


export default function CardDB() {


  const [ContentScreen,setContentScreen] = useState([]);
  const [StateContent,setStateContent] = useState(false);

   useEffect(()=>{

    fetch('https://dragonball-api.com/api/characters')
    .then( response => response.json())
    .then((Data)=>{
      setContentScreen(Data.items);
    })
    .catch((err)=>{
      console.log(err);
    })
    .finally(()=>{
      setStateContent(true);
    })

   })

  return (
      <FlatList style = {CardDB_Style.ContainerList} data={ContentScreen} renderItem={({item})=>{
            return(
            <View style = {CardDB_Style.Card}>
              <Image source={{uri: item.image}} height={300} width={300} style={{objectFit: 'contain'}}/>
              <Text style = {CardDB_Style.TextCard}>{item.name}</Text>
              <View style={CardDB_Style.ContainerBtns}>
                <TouchableOpacity style = {CardDB_Style.BtnVermas}>
                  <Text style={CardDB_Style.TextBtnVermas}>Ver mas</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {CardDB_Style.BtnIrVideos}>
                  <Text style={CardDB_Style.TextBtnIrVideo}>Ir videos</Text>
                </TouchableOpacity>
              </View>
            </View>
           )
      }}/>
  )
}
