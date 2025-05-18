import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DBZScreen from './Screens/DBZ_Screen';
import CapitulosAnime from './Screens/CapitulosAnime';
import HomeScreen from './Screens/Home';
import { Pressable,Text } from 'react-native';

export default function App() {

  const stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <stack.Navigator initialRouteName='AnimeUrp'>
        <stack.Screen name='AnimeUrp' 
        
        options={{
          title:'AnimeUrp',
          // headerTitleAlign,
          headerRight: () => {
            return(
          <Pressable onPress={()=>{alert('funciona')}}>
            <Text style={{color: 'black'}}>Info</Text>
          </Pressable>
          )},
          headerStyle:{}
        }} 
        component={HomeScreen}/>






        <stack.Screen name='Dragon Ball' component={DBZScreen}/>
        <stack.Screen  name='capitulos' component={CapitulosAnime} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
