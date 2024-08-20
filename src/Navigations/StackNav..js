import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import LoginPage from '../screens/Login';
import PaymentScreen from '../screens/payment';
const Stack = createStackNavigator();

const sc = {
  headerStyle: {
    backgroundColor: 'grey', // Customize the header background color
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
         <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        {/* <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
