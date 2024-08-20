import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function PaymentScreen() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayPress = () => {
    if (!cardNumber || !expiryDate || !cvv || !email || !name) {
      Alert.alert('Error', 'Please fill all the fields correctly');
      return;
    }

    // Here you would send the payment data to your backend or payment processor
    Alert.alert('Payment Success', 'Your payment was successful!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter Payment Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        keyboardType="number-pad"
        value={cardNumber}
        onChangeText={setCardNumber}
        maxLength={16}
      />
      <View style={styles.expiryCvvContainer}>
        <TextInput
          style={[styles.input, styles.expiryInput]}
          placeholder="MM/YY"
          keyboardType="number-pad"
          value={expiryDate}
          onChangeText={setExpiryDate}
          maxLength={5}
        />
        <TextInput
          style={[styles.input, styles.cvvInput]}
          placeholder="CVV"
          keyboardType="number-pad"
          value={cvv}
          onChangeText={setCvv}
          maxLength={3}
        />
      </View>
      <TouchableOpacity onPress={handlePayPress} style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  expiryCvvContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expiryInput: {
    flex: 2,
    marginRight: 10,
  },
  cvvInput: {
    flex: 1,
  },
  payButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
