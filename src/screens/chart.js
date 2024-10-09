import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
export default function ChartScreen({ route }) {
  const { productId, productName } = route.params; // Access product information

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sales Data for {productName}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
