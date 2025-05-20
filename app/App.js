import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CapitulosAnime from './Screens/CapitulosAnime';
import HomeScreen from './Screens/Home';
import AboutAnime from './Screens/AboutAnime';
import Personajes from './Screens/Personajes';
import AboutPersonajes from './Screens/AboutPersonajes';
import Lock from './Screens/Lock';
import { View,Text } from 'react-native';

export default function App() {


  const stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <stack.Navigator initialRouteName='Lock'>
        <stack.Screen name='Lock' options={{
          header:()=>{}
        }} component={Lock} />
        <stack.Screen name='AnimeUrp' options={{
          headerBackVisible: false,
        }} component={HomeScreen}/>

        <stack.Screen name='AboutAnime' options={({route})=>({
          title: route.params.AnimeTitle
        })} component={AboutAnime}/>

        <stack.Screen  name='capitulos' component={CapitulosAnime} />

        <stack.Screen name='Personajes' options={({route})=>({
          title:'Personajes de ' + route.params.AnimeTitle
        })} component={Personajes}/>

        <stack.Screen name='AboutPersonajes' component={AboutPersonajes}/>
        
      </stack.Navigator>
    </NavigationContainer>
  );
}
