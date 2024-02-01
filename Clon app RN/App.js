import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function App() {
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Agrega la lógica de inicio de sesión aquí
    console.log('Iniciar sesión');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logooo.jpg')} style={styles.headerImage} resizeMode="cover" />
      <Image source={require('./assets/1logo.jpg')} style={styles.headerImage2} resizeMode="cover" />

      <Text style={styles.heading}>¡Bienvenido!</Text>
      <Text style={styles.username}>YESICA ALICIA</Text>

      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Text style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Olvidé mi contraseña</Text>
      </Text>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <Image source={require('./assets/abajo.jpg')} style={styles.headerImage3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    marginTop: 30,
    width: 300,
    height: 70,
  },
  headerImage2: {
    width: 360,
    height: 230,
  },
  heading: {
    color: '#cab24a',
    fontSize: 24,
    marginVertical: 10,
    marginTop: 30,
    fontWeight: 'bold',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 5,
    marginTop: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '70%',
    padding: 8,
    marginVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#1e3f25',
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    padding: 14,
    backgroundColor: '#c2b360b6',
    color: '#685c44',
    borderWidth: 0,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#685c44',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  forgotPasswordContainer: {
    marginTop: 20,
    marginLeft: 150,
  },
  forgotPassword: {
    color: '#8a0b0b',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  headerImage3: {
    width: 350,
    height: 100,
    marginTop: 40,
  },
});

