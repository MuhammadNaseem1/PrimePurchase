import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function ProductDetails({navigation, route }) {
  const { product } = route.params;

  const renderVariety = ({ item }) => (
    <View style={styles.varietyContainer}>
      <Text style={styles.varietyName}>{item.name}</Text>
      <Text style={styles.varietyPrice}>{item.price}</Text>
      <Text style={styles.varietyColor}>{item.color}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <FlatList
        data={product.varieties}
        renderItem={renderVariety}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.varietyList}
      />
      <TouchableOpacity style={styles.button} onPress={() => { navigation.goBack() }}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  varietyContainer: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 3,
    borderRadius: 20,
    elevation: 10,

  },
  varietyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  varietyPrice: {
    fontSize: 16,
    color: '#666',
  },
  varietyColor: {
    fontSize: 14,
    color: '#999',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: '#83bbb2', // Button background color
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
