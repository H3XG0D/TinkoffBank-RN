import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth} from '../hooks/useAuth';

import Home from '../components/screens/home/Home';
import Profile from '../components/screens/profile/Profile';
import Payment from '../components/screens/payment/Payment';
import Service from '../components/screens/service/Service';
import Support from '../components/screens/support/Support';
import More from '../components/screens/more/More';

import Auth from '../components/screens/auth/Auth';

const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  const {user} = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
            <Stack.Screen name="Payment" component={Payment}></Stack.Screen>
            <Stack.Screen name="Service" component={Service}></Stack.Screen>
            <Stack.Screen name="Support" component={Support}></Stack.Screen>
            <Stack.Screen name="More" component={More}></Stack.Screen>
          </>
        ) : (
          <Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
