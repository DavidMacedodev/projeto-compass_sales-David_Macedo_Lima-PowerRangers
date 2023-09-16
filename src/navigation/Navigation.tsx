import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from './AuthStack'
import React, { useEffect, useState } from 'react';
import { MainStackNavigator } from './MainStack'
import { auth } from '../config_firebase'
import { User, onAuthStateChanged } from "firebase/auth";

const MainStack = createNativeStackNavigator();
export default function Navigation() {
    const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);
    return (
        <NavigationContainer>
        <MainStack.Navigator initialRouteName={"MainStackNavigator"}>
        {user ? (
            <MainStack.Screen

            name="AuthStack"
            component={AuthStack}
            options={{ headerShown: false }}
          />
          ) : (
           <MainStack.Screen
            name="MainStackNavigator"
            component={MainStackNavigator}
            options={{ headerShown: false }}
          />
          
      
          
          )}
             </MainStack.Navigator >
        </NavigationContainer>

            )
          }