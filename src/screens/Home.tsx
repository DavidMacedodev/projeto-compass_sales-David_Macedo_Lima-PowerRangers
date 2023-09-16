import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView
} from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from 'react-native';
import { auth, db } from "../config_firebase";
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { doc, getDoc } from "firebase/firestore";
import { MainStack } from "../navigation/AuthStack";
import Login from "./Login";

export default function Home({ navigation }: { navigation: any }) {
  const [userInfo, setUserInfo] = useState<any | undefined>(null);
  const handleSignout = async () => {
      await auth.signOut();
      navigation.navigate('Login');
    };
    
       return (
  <>
      <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
  <ScrollView style={styles.scrollView}>
    <View style={styles.loginContainer}>
      <Text style={styles.h1}>HELLO </Text>
    </View>
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSignout}>
        <Text style={styles.buttonText}>SIGN OUT</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
  </>
);
}

const styles = StyleSheet.create({
scrollView: {
  backgroundColor: '#f9f9f9',
  paddingHorizontal: 15,
},
buttonBack: {
  fontSize: 38,
  color: '#222222',
  marginTop: 10,
},
loginContainer: {
  width: 375,
  height: 110,
  marginTop: 40,
},
container: {
  alignItems: 'center',
},
h1: {
  color: '#222222',
  fontSize: 34,
  fontWeight: 'bold',
  marginVertical: 10,
  alignItems: 'flex-start',
},
h2: {
  color: '#222222',
  fontSize: 14,
  fontWeight: 'bold',
},
inputArea: {
  width: '100%',
  paddingTop: 20,
},
inputField: {
  borderWidth: 1,
  borderRadius: 5,
  borderColor: '#ffffff',
  fontSize: 15,
  padding: 10,
  height: 70,
  marginBottom: 40,
},
button: {
  backgroundColor: '#DB3022',
  width: '100%',
  padding: 10,
  borderRadius: 50,
  height: 48,
},
buttonText: {
  color: '#FFFFFF',
  alignSelf: 'center',
  fontSize: 14,
},
});