import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, TouchableHighlight, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { topLayoutColor } from '../Assets/images/Colors';
import AwesomeAlert from 'react-native-awesome-alerts';
export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [layoutWidth, setLayoutWidth] = useState(0);
  const [alert,setAlert] =useState(false)
  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    showAlert();
   
  };

 const showAlert = () => {
  setAlert(!alert)
  };

 const hideAlert = () => {
  setAlert(!alert)
  };
  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setLayoutWidth(width);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View 
        style={[styles.layout, { borderBottomLeftRadius: layoutWidth * 0.1, borderBottomEndRadius: layoutWidth * 0.1 }]}
        onLayout={handleLayout}
      ></View>
      
      <TouchableHighlight style={styles.highlight}>       
        <Image
          style={styles.logo}
          source={require('../Assets/images/1.png')}
        />
      </TouchableHighlight>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email <Text style={styles.asterisk}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password <Text style={styles.asterisk}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Forgot Password")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signup}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
        <AwesomeAlert
          show={alert}
          showProgress={false}
          title="Successful"
          message="Successfully Logged in!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, Login"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            hideAlert(!alert)
          }}
          onConfirmPressed={() => {
            navigation.navigate("Home");
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  asterisk: {
    color: 'red',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    height: 50,
    backgroundColor: topLayoutColor,
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
    color: '#0b554f',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  signup: {
    color: '#0b554f',
    fontSize: 16,
    textAlign: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red",
    marginBottom: 30,
    marginTop: 30,
  },
  highlight: {
    marginBottom: 30,
  },
  layout: {
    paddingTop: 0,
    height: '20%',
    backgroundColor: topLayoutColor,
    width: '100%',
  },
});
