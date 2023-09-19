import React, { useState, useEffect } from 'react';
import { StatusBar, Text, View, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { auth, db } from '../config_firebase';
import { doc, getDoc } from 'firebase/firestore';
import { fetchUserData } from '../assets/Async_Config';
import { signOut } from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Home({ navigation }: { navigation: any }) {
  const [userInfo, setUserInfo] = useState<any | undefined>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
   
      const userData = await fetchUserData('user');
      if (userData && userData.uid) {
        const userDocRef = doc(db, 'users', userData.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setUserInfo(userData);
        }
      }
      setLoading(false);
    };

    fetchUserInfo();
  }, []);

  const handleSignout = async () => {
    await signOut(auth);
    await AsyncStorage.removeItem('user')  
    navigation.navigate('Login'); 
  };

  return (
    <>
      <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
      {loading ? (
        <ActivityIndicator size="large" color="#DB3022" />
      ) : (
        <View style={styles.container}>
          <Text style={styles.h1}>HELLO {userInfo?.Name || ''}</Text>
          <TouchableOpacity style={styles.button} onPress={handleSignout}>
            <Text style={styles.buttonText}>SIGN OUT</Text>
          </TouchableOpacity>
        </View>
      )}
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