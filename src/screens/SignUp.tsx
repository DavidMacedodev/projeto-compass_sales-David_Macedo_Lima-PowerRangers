import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import styles from '../assets/style';
import { auth, db } from "../config_firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";



export default function Signup({ navigation }: { navigation: any }) {
 
  const [email, setEmail ] = useState<string>("")
  const [password,setPassword] = useState<any>("")
  const [username, setUsername] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const handleLoginButton = () => {
    navigation.navigate('Login', {});
  };

  const handleSignUp = async () => {
    setLoading(true);
    await
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
     
        setLoading(false);
        Alert.alert("account create successful :)");
      
      })
      .catch((err: any) => {
        Alert.alert(err.message);
      });
  };

  return (
    <>
      <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.loginContainer}>
          <Text style={styles.h1}>Sign Up</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.inputArea}>
            <View style={styles.labelContainer}>
              <Text style={styles.labelText}>Name</Text>
            </View>
            <TextInput
              style={styles.inputField}
              value={username} 
              onChangeText={(text) => setUsername(text)} 
            />
          </View>

          <View style={styles.inputArea}>
            <View style={styles.labelContainer}>
              <Text style={styles.labelText}>Email</Text>
            </View>
            <TextInput
              style={styles.inputField}
              placeholder="example@gmail.com"
              placeholderTextColor="#9B9B9B"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.inputField}
              placeholder="Password"
              placeholderTextColor="#9B9B9B"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.aditionalsSign}>
            <TouchableOpacity
              style={styles.forgotBtnArea}
              onPress={handleLoginButton}
            >
              <Text style={styles.forgotBtnText}>Already have an account?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>  {loading ? "Creating account..." : "Create Account"}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};