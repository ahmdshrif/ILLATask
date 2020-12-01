import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
function Details({}) {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
    </View>
  );
}

Details.propTypes = {};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;
