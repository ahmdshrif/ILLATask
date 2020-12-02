import React from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Card, Button} from 'react-native-elements';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image'; // for caching images and speed performance
import {useNavigation} from '@react-navigation/native';

const product_card = ({Data}) => {
  const {name, image, price, discount_amount} = Data;
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Details', {Data});
  };
  return (
    <Card containerStyle={{width: '42%'}}>
      <FastImage
        style={styles.image}
        PlaceholderContent={<ActivityIndicator color="white" size="large" />}
        source={{uri: image}}
      />
      <Card.Title h6 style={{marginBottom: 10, marginTop: 20}}>
        {name}
      </Card.Title>
      <Card.Divider />
      <Text style={styles.price}>{`Price : ${price} $`}</Text>
      <Text style={styles.discount}>{`Save : ${discount_amount} $`}</Text>
      <Card.Divider />
      <Button type="clear" title="Details" onPress={onPress} />
    </Card>
  );
};

product_card.propTypes = {
  Data: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  title: {
    color: '#5a647d',
    fontWeight: 'bold',
    fontSize: 30,
  },
  price: {
    fontSize: 8,

    fontWeight: 'bold',
    marginBottom: 10,
  },
  discount: {
    fontWeight: 'bold',
    fontSize: 8,
    color: 'red',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 100,
  },
});

export default React.memo(product_card); //use pureComponents (memo) to improve Performance
