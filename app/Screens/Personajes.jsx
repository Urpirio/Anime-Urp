import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styleCardPersonajes } from '../Style/Style - General/styleCardPersonajes';
import ModalAboutPersonajes from '../components - Modal/ModalAboutPersonajes';

export default function Personajes() {

  const route = useRoute();
  const { ApiPersonajes } = route.params;
  const [dataPersonajes, setdataPersonajes] = useState([]);
  const [StatusDataPersonajes, setStatusDataPersonajes] = useState(false);

  const [ModalStatus,setModalStatus] = useState(false);
  const [DataModal,setDataModal] = useState({
    Descripcion: String,
    Edad: String,
    Raza: String,
    Nombre: String,
  })

  useEffect(()=>{
    const DataPersonajes = () =>{
      fetch(ApiPersonajes)
      .then(respuesta => respuesta.json())
      .then((Data)=>{
        setdataPersonajes(Data.results[0].Personajes)
      })
      .catch((error)=>{
        console.log(error)
      })
      .finally(()=>{
        setStatusDataPersonajes(true);
      })
    };
    DataPersonajes();
  });

  if(!StatusDataPersonajes){
    return(
      <SafeAreaProvider style={{justifyContent: 'center',alignItems:'center'}}>
        <View>
          <Text>Cargando...</Text>
        </View>
      </SafeAreaProvider>
    )
  }

  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>
      <FlatList
      style={styleCardPersonajes.ContainerList}
      data={dataPersonajes}
      renderItem={({item})=>{
        return(
          <View style={styleCardPersonajes.ContainerCard}>
            <View style={styleCardPersonajes.ContainerImg}>
              <Image source={{uri:item.Img}} style={styleCardPersonajes.ImgPersonaje}/>
              <Text style={{fontSize:20}}>{item.Nombre}</Text>
            </View> 
            
            <View style={styleCardPersonajes.ContainerBtnQuienEs} >
              <TouchableOpacity style={styleCardPersonajes.BtnQuienEs} onPress={()=>{
                setDataModal({
                  Descripcion: item.Descripcion,
                  Edad: item.Edad,
                  Raza: item.Raza,
                  Nombre: item.Nombre,
                });
                setModalStatus(!ModalStatus);


              }}>
                <Text style={styleCardPersonajes.TextBtnQuienEs}>Quien es?</Text>
              </TouchableOpacity>
            </View>
            <View style={styleCardPersonajes.ContainerBtnClicks}>
              <TouchableOpacity style={styleCardPersonajes.BtnClicks}>
                <Text style={styleCardPersonajes.TextBtnClick}>Clicks de {item.Nombre}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }}
      />

      <ModalAboutPersonajes
      Data={DataModal}
      StatusModal={ModalStatus}
      FuncionCloseModal={()=>{
        setModalStatus(!ModalStatus)
      }}
      />


    </SafeAreaProvider>
  )
}
