import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CapitulosAnime from './Screens/CapitulosAnime';
import HomeScreen, { AboutThisAnime } from './Screens/Home';
import { Pressable,Text } from 'react-native';
import AboutAnime from './Screens/AboutAnime';
import { useEffect, useState } from 'react';
import Personajes from './Screens/Personajes';
import AboutPersonajes from './Screens/AboutPersonajes';

export default function App() {

  const [aboutThisAnime,setAboutThisAnime] = useState(null);

  const stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <stack.Navigator initialRouteName='AnimeUrp'>
        <stack.Screen name='AnimeUrp' component={HomeScreen}/>
        <stack.Screen name='AboutAnime' options={({route})=>({
          title: route.params.AnimeTitle
        })} component={AboutAnime}/>
        <stack.Screen  name='capitulos' component={CapitulosAnime} />
        <stack.Screen name='Personajes' component={Personajes}/>
        <stack.Screen name='AboutPersonajes' component={AboutPersonajes}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}
