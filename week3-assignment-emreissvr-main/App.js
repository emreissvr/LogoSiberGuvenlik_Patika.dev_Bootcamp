import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';

import Register from './src/screens/Register';
import Login from './src/screens/Login';
import ResetPassword from './src/screens/ResetPassword';
import Main from './src/screens/Main';
import Home from './src/screens/Home';
import Post from './src/screens/Post';
import User from './src/screens/User';
// "src" klasörü altında oluşturduğum "screens" klasörü altında oluşturduğum Register,Login,ResetPassword,Main,Home,Post,User js dosyalarını
// app.js dosyasına import ettim.




const Stack = createNativeStackNavigator();


// import ettiiğim react-navigation modülünden createNativeStackNavigator componentinden stack adlı değişken oluşturdum.
// NavigationContainer componenti App ortamına en üst seviye navigator'ı bağlamaktan ve uygulamanın durumunu(state) yönetmekten sorumludur.
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  > 
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="ResetPassword" component={ResetPassword}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Post" component={Post}/>
        <Stack.Screen name="User" component={User}/>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}





 
