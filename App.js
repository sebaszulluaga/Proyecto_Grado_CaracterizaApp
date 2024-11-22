import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import BeneficiaryScreen from './screens/BeneficiaryScreen';
import ReportScreen from './screens/ReportScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Beneficiaries" component={BeneficiaryScreen} />
        <Stack.Screen name="Reports" component={ReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
