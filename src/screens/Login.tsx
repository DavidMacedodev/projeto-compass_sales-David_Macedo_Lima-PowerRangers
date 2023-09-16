import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from '../assets/style';

function Login() {
  const navigation = useNavigation<NavigationProp<Record<string, object>>>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleForgetButton = () => {
    navigation.navigate('Forget_Password', {});
  };

  const handleSignUpButton = () => {
    navigation.navigate('SignUp', {});
  };

  // Corrija esta função para lidar com o login
  const handleLoginButton = () => {
    // Aqui você pode adicionar a lógica para lidar com o login,
    // como enviar os dados para um servidor ou realizar a autenticação.
    // Por enquanto, apenas exibiremos os valores de email e senha.
    console.log('Email:', email);
    console.log('Password:', password);
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

          <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
            <Text style={styles.buttonText}>LOGIN</Text>
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

export default Login;
