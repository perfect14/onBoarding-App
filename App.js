import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnlineShopping from './OnlineShopping';
import PaymentSuccessful from './PaymentSuccessful';
import Cart from './AddToCart'

export default function App() {
  return (
    <View style={styles.container}>
      <Cart />
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
});
