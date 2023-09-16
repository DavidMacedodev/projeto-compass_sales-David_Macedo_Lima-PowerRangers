import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import styles from '../assets/style';

function SignUp() {
  const navigation = useNavigation<NavigationProp<Record<string, object>>>();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleLoginButton = () => {
    navigation.navigate('Login', {});
  };

  const handleSignUp = () => {
    // Coloque aqui a lógica para lidar com o registro do usuário.
    // Você pode usar as informações em 'user' para enviar para o servidor, por exemplo.
    // Isso é apenas um esqueleto, você precisará implementar a lógica real.
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
              value={user.name}
              onChangeText={(name) => setUser({ ...user, name })}
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
              value={user.email}
              onChangeText={(email) => setUser({ ...user, email })}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.inputField}
              placeholder="Password"
              placeholderTextColor="#9B9B9B"
              secureTextEntry
              value={user.password}
              onChangeText={(password) => setUser({ ...user, password })}
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
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export default SignUp;