import { View,Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as LocalAuthentication from 'expo-local-authentication';
import { useState } from "react";
import { useNavigation } from "expo-router";

export default function Lock() {
    const [Pass,setPass] = useState(false);
    const Navigation = useNavigation()

    const GetInApp = () =>{
         if(!Pass){
            LocalAuthentication.authenticateAsync().then((Data)=>{
              if(Data.success){
                setPass(!Pass);
                Navigation.navigate('AnimeUrp');
              }else{
                
              }
            })
            return(<View>
              <Text>Huella</Text>
            </View>)
          }
    };


  return (
    <SafeAreaProvider style={{alignItems: 'center',justifyContent: 'center'}}>
        <View style={{gap: 10,justifyContent: 'center',alignItems:'center'}}>
            <Text style={{fontSize:20,fontWeight: 600}}>Lector de Huella</Text>
            <TouchableOpacity style={{
                borderWidth:1,
                height: 100,
                width:100,
                borderRadius: 20,
                justifyContent:'center',
                alignItems:'center',
                }} onPress={GetInApp}>
                <Image source={require('../../assets/fingerprint.png')} 
                style={{height:'100%',width:'100%',tintColor: 'orange'}}/>
            </TouchableOpacity>
        </View>
    </SafeAreaProvider>
  )
}
