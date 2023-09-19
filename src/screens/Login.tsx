import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import styles from '../assets/style';
import { auth } from '../config_firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { saveUserData } from '../assets/Async_Config';
export default function Login({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleForgetButton = () => {
    navigation.navigate('Forget_Password', {});
  };

  const handleSignUpButton = () => {
    navigation.navigate('SignUp', {});
  };

  const handleSignin = async () => {
    
    setEmailError(null);
    setPasswordError(null);
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await saveUserData('user', { uid: user.uid, name: user.displayName || '' });
      navigation.navigate('Home');
  
     
      setEmail('');
      setPassword('');
    } catch (err:any) {
  
      if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-email') {
        setEmailError('Invalid email address');
      } else if (err.code === 'auth/wrong-password') {
        setPasswordError('Incorrect password');
      } else if (err.code === 'auth/invalid-login-credentials') {
        setPasswordError('Email or Password invalid');
      } else {
        Alert.alert(err.message);
      }
    }
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
            {emailError && <Text style={styles.errorText}>{emailError}</Text>}
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
            {passwordError && (
              <Text style={styles.errorText}>{passwordError}</Text>
            )}
          </View>
          <View style={styles.aditionals}>
            <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgetButton}>
              <Text style={styles.forgotBtnText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSignin}>
            <Text style={styles.buttonText}>
              Login
            </Text>
          </TouchableOpacity>
         
        </View>
      </ScrollView>
    </>
  );
}