import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,Image,TouchableHighlight } from 'react-native';

export default function LoginPage({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    navigation.navigate("Home")
    // Perform login logic here
    Alert.alert('Success', 'Logged in successfully');
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.highlight}>       
        <Image
        style={styles.logo}
        source={require('../Assets/images/1.png')}
      />
      </TouchableHighlight>
      <Text style={styles.title}></Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText} onPress={()=>handleLogin()}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7',
    marginVertical:'10%'
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  forgotPassword: {
    color: '#007BFF',
    fontSize: 16,
    textAlign: 'center',
  },
  logo: {
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red"
  },
  highlight:{
    // borderRadius:'10%'
    flex:0.40,
    // borderRadius:'10%'
  }
});
