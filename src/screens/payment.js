import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';
import axios from 'axios';

const Payment = () => {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const fetchPaymentIntentClientSecret = async () => {
        try {
            const response = await axios.post('http://192.168.204.35:3000/intents', {
                amount: 19950 // amount in cents
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const { client_secret } = response.data;
            console.log("client secret",client_secret)
            return client_secret;
        } catch (error) {
            console.error('Error fetching payment intent:', error);
            setError('Failed to fetch payment intent');
        }


    };

    const handlePayment = async () => {
        setLoading(true);
        setError(null);

        const clientSecret = await fetchPaymentIntentClientSecret();
        const { error: paymentSheetError } = await initPaymentSheet({
          merchantDisplayName: 'Prime Purchase, Inc.',
          paymentIntentClientSecret: clientSecret,
          defaultBillingDetails: {
            name: 'Muhammad Naseem',
          },
        });
        if (paymentSheetError) {
          Alert.alert('Something went wrong', paymentSheetError.message);
          return;
        }
        const { error: paymentError } = await presentPaymentSheet();

  if (paymentError) {
    Alert.alert(`Error code: ${paymentError.code}`, paymentError.message);
    return;
  }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Checkout</Text>
            <Button
                title={loading ? "Processing..." : "Pay"}
                onPress={handlePayment}
                disabled={loading}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    error: {
        color: 'red',
        marginTop: 20,
    },
});

export default Payment;
