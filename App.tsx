import {Text} from 'react-native'
import { MyStack } from './src/Navigations/StackNav.';
import { StripeProvider } from '@stripe/stripe-react-native';
const App = ()=> {
  return(
    <StripeProvider
    publishableKey="pk_test_51PppyR01EfaDZ1wW8QKHUjvDXJeDcBWfxQPlQflwggDDhCIA0EBU71Ho0PVDqSyQ362W6H2dmhhnNZNqDRxmVIhj00wn4aL180"
>
   <MyStack/>
      </StripeProvider>
  )
}
export default App;
