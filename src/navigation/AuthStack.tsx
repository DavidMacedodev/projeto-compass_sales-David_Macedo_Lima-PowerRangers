import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home'
import React from 'react';

export const MainStack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <MainStack.Navigator>
                <MainStack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
             />

        </MainStack.Navigator>
    )
}