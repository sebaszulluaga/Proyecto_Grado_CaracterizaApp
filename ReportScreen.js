import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReportScreen = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    const loadBeneficiaries = async () => {
      try {
        const storedData = await AsyncStorage.getItem('beneficiaries');
        if (storedData) {
          setBeneficiaries(JSON.parse(storedData));
        }
      } catch (e) {
        Alert.alert("Error", "No se pudieron cargar los beneficiarios.");
      }
    };

    loadBeneficiaries();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beneficiarios Registrados</Text>
      <FlatList
        data={beneficiaries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>ID: {item.id}</Text>
            <Text>Nombre: {item.name}</Text>
          </View>
        )}
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
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default ReportScreen;
