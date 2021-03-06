import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let x = 1;
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text>DoneWithIt</Text>
      </View>
      <Text>Hot Reload</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    width: '100%', 
    backgroundColor: 'orange',
    color: 'white',
    textAlign: 'center'
  }
});
