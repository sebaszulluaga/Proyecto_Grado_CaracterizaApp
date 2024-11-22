import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido a CaracterizApp</Text>
      <Button
        title="Gestionar Beneficiarios"
        onPress={() => navigation.navigate('Beneficiaries')}
        color="#4CAF50"
      />
      <Button
        title="Generar Reportes"
        onPress={() => navigation.navigate('Reports')}
        color="#2196F3"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default HomeScreen;

