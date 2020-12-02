import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button} from 'react-native';
import PropTypes from 'prop-types';

const Details = ({route}) => {
  const {name, description, price, discount_amount, image} = route.params.Data;
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.text}>{`Name : ${name}`}</Text>
        <Image style={{height: 200, width: 200}} source={{uri: image}} />
        <Text style={styles.text}>{`Description : \n${description}`}</Text>
        <Text style={styles.text}>{`Price : ${price}`}</Text>
        <Text style={styles.text}>{`Discount :  ${discount_amount}`}</Text>
        {isFavorite ? (
          <Button
            title={' Remove Favorite  '}
            onPress={() => setIsFavorite(false)}
          />
        ) : (
          <Button
            title={'  Add to Favorite  '}
            onPress={() => setIsFavorite(true)}
          />
        )}
      </View>
    </ScrollView>
  );
};

Details.propTypes = {
  route: PropTypes.object.isRequired,
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexGrow: 1,
    // alignItems: 'center',
  },
  text: {
    fontSize: 14,
    padding: 12,
  },
});

export default Details;
