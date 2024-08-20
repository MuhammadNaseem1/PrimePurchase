import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const products = [
  { id: '1', name: 'Product 1', price: '$199', image: require('../Assets/images/1.png') },
  { id: '2', name: 'Product 2', price: '$299', image: require('../Assets/images/2.jpg') },
  { id: '3', name: 'Product 3', price: '$399', image: require('../Assets/images/3.jpg') },
  { id: '4', name: 'Product 4', price: '$499', image: require('../Assets/images/4.jpg') },
  { id: '5', name: 'Product 5', price: '$599', image: require('../Assets/images/5.jpg') },
  { id: '6', name: 'Product 6', price: '$699', image: require('../Assets/images/6.jpg') },
  { id: '7', name: 'Product 7', price: '$799', image: require('../Assets/images/7.jpg') },
  { id: '8', name: 'Product 8', price: '$899', image: require('../Assets/images/8.jpg') },
  { id: '9', name: 'Product 9', price: '$999', image: require('../Assets/images/9.jpg') },
  { id: '10', name: 'Product 10', price: '$1099', image: require('../Assets/images/10.jpg') },
  { id: '10', name: 'Product 10', price: '$1099', image: require('../Assets/images/11.jpg') },
];

export default function Home({navigation}) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.fullImage} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={()=>navigation.navigate("Payment")} >
          <Image
            source={require('../Assets/images/cart-icon.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../Assets/images/cart-icon.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to PrimePurchase</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
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
  list: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  fullImage: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  iconButton: {
    padding: 5,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
});
