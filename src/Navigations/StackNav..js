import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import LoginPage from '../screens/Login';
import SignUpPage from '../screens/Signup';
import PaymentScreen from '../screens/payment';
import ForgotPasswordPage from '../screens/ForgetPassword';
import ProductDetails from '../screens/ProductDetails';
const Stack = createStackNavigator();

const HeaderBackground = () => (
  <View style={styles.headerBackground} />
);

const sc = {
  headerStyle: {
    backgroundColor: '#83bbb2', // Customize the header background color
  },
  headerTintColor: '#fff', // Color of the header title and back button
  headerTitleStyle: {
    fontWeight: 'bold', // Bold title
    fontSize: 18, // Customize the font size
  },
  headerTitleAlign: 'center', // Center align the title
  animationEnabled: true, // Enable animations
};

export function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={sc}>
        <Stack.Screen 
          name="Login" 
          component={LoginPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerBackground: () => <HeaderBackground />,
            headerLeft: () => null, // Disable the back arrow
          }} 
        />
        <Stack.Screen 
          name="Payment" 
          component={PaymentScreen} 
        />
        <Stack.Screen 
          name="Signup" 
          component={SignUpPage} 
        />
        <Stack.Screen 
          name="Forgot Password" 
          component={ForgotPasswordPage} 
        />
            <Stack.Screen 
          name="Product Details" 
          component={ProductDetails} 
          options={{
            headerBackground: () => <HeaderBackground />,
            headerLeft: () => null, // Disable the back arrow
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: '#83bbb2', // Customize the header background color
    borderBottomLeftRadius: 40, // Adjust this value to match 10% of the width if needed
    borderBottomRightRadius: 40, // Adjust this value to match 10% of the width if needed
    overflow: 'hidden',
  },
});

export default MyStack;
