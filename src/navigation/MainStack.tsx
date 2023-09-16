import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Forget_Password from '../screens/Forget_Password';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainStack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  const [firstTimeUser, setFirstTimeUser] = useState(true);

  useEffect(() => {
    // Verificar se é a primeira vez que o usuário entra no aplicativo
    AsyncStorage.getItem('firstTimeUser').then((value) => {
      if (value === 'false') {
        setFirstTimeUser(false);
      }
    });
  }, []);

  const initialRouteName = firstTimeUser ? 'SignUp' : 'Login';

  return (
    <MainStack.Navigator initialRouteName={initialRouteName}>
      <MainStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Forget_Password"
        component={Forget_Password}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
