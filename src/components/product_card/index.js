import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-elements';
import PropTypes from 'prop-types';

//sample data
const _data = {
  id: 1,
  name: 'Aerodynamic Aluminum Keyboard',
  description:
    'Cupiditate adulatio verbera theatrum dolore umbra aedificium tenuis apparatus cui terebro non eum admoveo surculus damno adsuesco cernuus suscipio delibero sollers ante suus summopere ullus thorax vae conforto colo repellat contigo succurro adsidue eos quasi vado utor demergo laborum tutamen est ubi crudelis eum defungo quam cetera capillus asper necessitatibus vitium carcer sapiente comes pax defetiscor.',
  image: 'https://loremflickr.com/250/250',
  price: '38919.47',
  discount_amount: '11084.9',
  status: true,
  categories: [
    {
      id: 14,
      name: 'Clothing, Health \u0026 Automotive',
    },
  ],
};

function product_card({Data}) {
  const {name, image, price, discount_amount} = _data;
  // const {name, image, price, discount_amount} = Data;
  const onPress = () => {};
  return (
    <Card>
      <Card.Image source={{uri: image}} />
      <Card.Title h4 style={{marginBottom: 10, marginTop: 20}}>
        {name}
      </Card.Title>
      <Card.Divider />
      <Text style={styles.price}>{`price : ${price} $`}</Text>
      <Text style={styles.discount}>{`discount : ${discount_amount} $`}</Text>
      <Card.Divider />
      <Button type="clear" title="Details" onPress={onPress} />
    </Card>
  );
}

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
    fontWeight: 'bold',
    marginBottom: 10,
  },
  discount: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'red',
    marginBottom: 10,
  },
});

export default product_card;
