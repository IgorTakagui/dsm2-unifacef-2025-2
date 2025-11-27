import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda do dia</Text>

      <Text style={styles.name}>Igor Takagui Reis</Text>
      <Text style={styles.classText}>Engenharia de Software</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('UserTasks')}
        >
          <Text style={styles.buttonText}>Meus compromissos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { marginTop: 10 }]}
          onPress={() => navigation.navigate('TeamTasks')}
        >
          <Text style={styles.buttonText}>Compromissos da equipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  classText: {
    fontSize: 14,
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '70%',
  },
  button: {
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
  },
});
