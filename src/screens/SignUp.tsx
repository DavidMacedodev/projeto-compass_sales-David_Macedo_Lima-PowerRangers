import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,

} from 'react-native';
import styles from '../assets/style';
import { auth, db } from '../config_firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { SaveData } from '../assets/Async_Config';
export default function Signup({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<any>('');
  const [username, setUsername] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [usernameError, setUsernameError] = useState<string | null>(null);

  const handleLoginButton = () => {
    navigation.navigate('Login', {});
  };

  const handleSignup = async () => {
    setLoading(true);
    setEmailError(null);
    setPasswordError(null);
    setUsernameError(null);

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false);
        setDoc(doc(db, 'users', user.uid), {
          Name: username,
          Email: email,
          CreatedAt: new Date().toUTCString(),
        });
        SaveData('user', { uid: user.uid, name: username });
        navigation.navigate("Login");
      })
      .catch((err: any) => {
        setLoading(false);
        if (err.code === 'auth/invalid-email') {
          setEmailError('Invalid email address');
        } else if (err.code === 'auth/weak-password') {
          setPasswordError('Password must be at least 6 characters');
        } else if (err.code === 'auth/email-already-in-use') {
          setEmailError('Email address is already in use');
        } else {
          setEmailError('An error occurred. Please try again.');
        }
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
            {usernameError && (
              <Text style={styles.errorText}>{usernameError}</Text>
            )}
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
          <View style={styles.aditionalsSign}>
            <TouchableOpacity
              style={styles.forgotBtnArea}
              onPress={handleLoginButton}
            >
              <Text style={styles.forgotBtnText}>
                Already have an account?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>
              {loading ? 'SIGN UP...' : 'SIGN UP'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}