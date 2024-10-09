import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, TouchableHighlight, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { topLayoutColor } from '../Assets/images/Colors';
import AwesomeAlert from 'react-native-awesome-alerts';
import axios from 'axios';
export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [layoutWidth, setLayoutWidth] = useState(0);
  const [alert, setAlert] = useState(false);

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    showAlert();
  };

  const signInGoogle = async () => {
    try {
      const response = await axios.get('http://192.168.204.35:3000/auth/google');
   if(response.status == 200)
   {
    Alert.alert(
      "Authenticated", // Title
      "You are authenticated", // Message
      [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("Home");
          }
        }
      ]
    )
   }
        // if (!response.ok) {
        //     throw new Error(`Response status: ${response.status}`);
        // }

    } catch (error) {
        console.error('Error:', error.message);
    }
};

  const showAlert = () => {
    setAlert(!alert);
  };

  const hideAlert = () => {
    setAlert(!alert);
  };

  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setLayoutWidth(width);
  };
  const text = "Welcome";
  const letters = text.split(""); // Split the text into individual characters
  
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
   <View
      style={[
        styles.layout,
        {
          borderBottomLeftRadius: layoutWidth * 0.1,
          borderBottomEndRadius: layoutWidth * 0.1,
        },
      ]}
      onLayout={handleLayout}
    >
      <View style={styles.curvedTextContainer}>
        {letters.map((letter, index) => (
          <Text
            key={index}
            style={[
              styles.letter,
              {
                transform: [
                  { rotate: `${(index - 3) * 5}deg` }, // Apply rotation for each letter to create curve
                ],
              },
            ]}
          >
            {letter}
          </Text>
        ))}
      </View>
    </View>
      
      <TouchableHighlight style={styles.highlight}>       
        <Image
          style={styles.logo}
          source={require('../Assets/images/1.png')}
        />
      </TouchableHighlight>

      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps='handled' scrollEnabled={false}>
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

        {/* Google Sign-In Button */}
        <TouchableOpacity style={styles.googleButton} onPress={() => signInGoogle()}>
          <Text style={styles.googleButtonText}>Sign in with  </Text>
          <Image
            style={styles.googleLogo}
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png' }}
          />
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
            hideAlert(!alert);
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
  curvedTextContainer: {
    flexDirection: 'row', // Letters in a row
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:'10%'
  },
  letter: {
    fontSize: 40,
    fontFamily: 'Papyrus', // Ensure the font is linked properly
    color: '#ffff',
    marginHorizontal: 2, // Space between letters
  },
  layout: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // For Android shadow effect
  },
  stylishText: {
    fontSize: 50, // Increased for a bold impact
    fontFamily: 'Papyrus', // Use your desired font here (ensure it's linked properly)
    alignSelf: 'center',
    textAlign: 'center',
    color: 'orange', // Stylish color
    textShadowColor: '#95a5a6', // Add text shadow for depth
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 4, // Softens shadow
    letterSpacing: 2, // Adds spacing between letters
    marginVertical: '10%',
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
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#D22B2B',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
  },
  googleLogo: {
    width: 74,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#333',
  },
});
