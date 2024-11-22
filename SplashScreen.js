import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000); // Esperar 3 segundos antes de navegar
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icbf-logo.png')} style={styles.logo} />
      <Text style={styles.appName}>CaracterizApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  logo: {
    width: 150,
    height: 150,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SplashScreen;
