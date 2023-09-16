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
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from '../assets/style';
import { auth, db } from "../config_firebase"
import { signInWithEmailAndPassword } from "firebase/auth";




export default function Login({ navigation }: { navigation: any }) {

  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleForgetButton = () => {
    navigation.navigate('Forget_Password', {});
  };

  const handleSignUpButton = () => {
    navigation.navigate('SignUp', {});
  };

 
  const handleSignin = async () => {
    setLoading(true);
    await
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false);
        Alert.alert("login successful :)");
      })
      .catch((err: any) => {
        Alert.alert(err.meassage);
      });
  };

  return (
    <>
      <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.loginContainer}>
          <Text style={styles.h1}>Login</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.inputArea}>
            <View style={styles.labelContainer}>
              
              <Text style={styles.labelText}>Email</Text>
            </View>
            <TextInput
              style={styles.inputField}
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
          <View style={styles.aditionals}>
            <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgetButton}>
              <Text style={styles.forgotBtnText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSignin}>
            <Text style={styles.buttonText}>
            {
                loading ? "Loading" : "Login"
              }
            </Text>
          </TouchableOpacity>
          <View style={styles.signUpArea}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity onPress={handleSignUpButton}>
              <Text style={styles.signUpBtnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

