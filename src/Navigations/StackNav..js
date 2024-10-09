import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import LoginPage from '../screens/Login';
import SignUpPage from '../screens/Signup';
import ForgotPasswordPage from '../screens/ForgetPassword';
import ProductDetails from '../screens/ProductDetails';
import Payment from '../screens/payment';
import ChartScreen from '../screens/chart';
import TabNavigator from './TabNav';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={TabNavigator} // Use Tab Navigator for Home
          options={{
            headerTitle: "Prime Purchase"
          }} 
        />
        <Stack.Screen 
          name="Product Details" 
          component={ProductDetails} 
          options={{ headerTitle: "Product Details" }} 
        />
        <Stack.Screen 
          name="Payment" 
          component={Payment} 
          options={{ headerTitle: "Payment" }} 
        />
        <Stack.Screen 
          name="Chart" 
          component={ChartScreen} 
          options={{ headerTitle: "Sales Chart" }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
