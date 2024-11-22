import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BeneficiaryScreen = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const saveBeneficiary = async () => {
    if (!id || !name) {
      Alert.alert("Error", "Por favor complete todos los campos.");
      return;
    }

    const beneficiary = { id, name };
    try {
      let beneficiaries = await AsyncStorage.getItem('beneficiaries');
      beneficiaries = beneficiaries ? JSON.parse(beneficiaries) : [];
      beneficiaries.push(beneficiary);
      await AsyncStorage.setItem('beneficiaries', JSON.stringify(beneficiaries));
      Alert.alert("Éxito", "Beneficiario registrado correctamente.");
    } catch (e) {
      Alert.alert("Error", "Hubo un problema al guardar el beneficiario.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Beneficiarios</Text>
      <TextInput
        style={styles.input}
        placeholder="ID del Beneficiario"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre del Beneficiario"
        value={name}
        onChangeText={setName}
      />
      <Button
        title="Guardar Beneficiario"
        onPress={saveBeneficiary}
        color="#4CAF50"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
    borderRadius: 4,
  },
});

export default BeneficiaryScreen;
