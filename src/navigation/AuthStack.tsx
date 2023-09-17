import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home'
import React from 'react';
import Login from "../screens/Login";

import Forget_Password from "../screens/Forget_Password";
export const MainStack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <MainStack.Navigator>
                <MainStack.Screen
                name="Home"
                component={Home}
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
    )
}