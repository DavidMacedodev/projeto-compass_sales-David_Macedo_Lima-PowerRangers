import React, { useState } from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Forget_Password() {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');

 

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <TouchableOpacity
          onPress={handleBackButton}>
          <Text style={styles.buttonBack}>{'<'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.h1}>Forgot Password</Text>
      </View>

      <Text style={styles.h2}>
        Please, enter your email address. You will receive a link to create a new password via email.
      </Text>

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

        <TouchableOpacity
          style={styles.button}
          >
          <Text style={styles.buttonText}>SEND</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    fontFamily: 'Roboto-Bold',
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  h2: {
    color: '#222222',
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
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
  labelContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: '#fff', 
    paddingHorizontal: 5,
  },
  labelText: {
    color: '#9B9B9B',
    fontSize: 13,
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

export default Forget_Password;