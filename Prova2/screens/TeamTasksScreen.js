import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TeamTasksScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerInfo}>
        <Text style={styles.name}>Igor Takagui Reis</Text>
        <Text style={styles.classText}>Engenharia de Software</Text>
        <Text style={styles.meText}>(Eu)</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.personTitle}>(Eu)</Text>
        <Text style={styles.item}>09h30: Reunião "Daily"</Text>
        <Text style={styles.item}>
          14h00: Reunião com cliente Carros & Carros
        </Text>
        <Text style={styles.item}>16h30: Prazo final Projeto X</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.personTitle}>Jurema (chefe)</Text>
        <Text style={styles.item}>09h30: Reunião "Daily"</Text>
        <Text style={styles.item}>12h00: Almoço com a diretoria</Text>
        <Text style={styles.item}>15h00: Saída viagem</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.personTitle}>Aderbal</Text>
        <Text style={styles.item}>09h30: Reunião "Daily"</Text>
        <Text style={styles.item}>13h30: Visita técnica Uni-FACEF</Text>
        <Text style={styles.item}>16h30: Prazo final Projeto X</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  headerInfo: {
    alignItems: 'center',
    marginBottom: 32,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  classText: {
    fontSize: 14,
    marginTop: 2,
  },
  meText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
  },
  block: {
    marginBottom: 28,
  },
  personTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  item: {
    fontSize: 14,
    marginBottom: 6,
  },
});
