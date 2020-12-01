import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import ProductCard from '../../components/product_card';
function Products({}) {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
    </View>
  );
}

Products.propTypes = {};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Products;
