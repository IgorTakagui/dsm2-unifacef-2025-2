import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserTasksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerInfo}>
        <Text style={styles.meText}>(Eu)</Text>
        <Text style={styles.name}>Igor Takagui Reis</Text>
        <Text style={styles.classText}>Engenharia de Software</Text>
      </View>

      <View style={styles.list}>
        <Text style={styles.item}>09h30: Reunião "Daily"</Text>
        <Text style={styles.item}>14h00: Reunião com cliente Carros & Carros</Text>
        <Text style={styles.item}>16h30: Prazo final Projeto X</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  headerInfo: {
    alignItems: 'center',
    marginBottom: 32,
  },
  meText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  classText: {
    fontSize: 14,
    marginTop: 2,
  },
  list: {
    marginTop: 8,
  },
  item: {
    fontSize: 14,
    marginBottom: 10,
  },
});
