import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from './AuthStack'
import React, { useEffect, useState } from 'react';
import { MainStackNavigator } from './MainStack'
import { User, } from "firebase/auth";
import { GetData } from "../assets/Async_Config";

const MainStack = createNativeStackNavigator();
export default function Navigation() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    GetData('user')
      .then((userData) => {
        if (userData && userData.uid) {
          setUser(userData);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao obter dados do AsyncStorage", error);
        setLoading(false);
      });
  }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={user ? "AuthStack" : "Login"}>
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
      </MainStack.Navigator>
    </NavigationContainer>
  );
}