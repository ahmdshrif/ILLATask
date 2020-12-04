import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button} from 'react-native';
import PropTypes from 'prop-types';
import {getFavorites, removeFavorite, setFavorite} from '../../utils/helper';

const Details = ({route}) => {
  const {
    name,
    description,
    price,
    discount_amount,
    image,
    id,
  } = route.params.Data;
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    _getFavorites();
  }, []);
  const _getFavorites = async () => {
    try {
      const Favorites = await getFavorites();
      console.log(Favorites);
      setIsFavorite(!!Favorites[id]);
    } catch (error) {
      alert('some thing went wrong');
    }
  };
  const _setToFavorite = async () => {
    try {
      setIsFavorite(true); //optimistic update
      await setFavorite(route.params.Data);
    } catch (error) {
      setIsFavorite(false); //undo update
      alert('some thing went wrong');
    }
  };

  const _removeFromFavorite = async () => {
    try {
      setIsFavorite(false); //optimistic update
      await removeFavorite(route.params.Data);
    } catch (error) {
      setIsFavorite(true); //undo update
      alert('some thing went wrong');
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.text}>{`Name : ${name}`}</Text>
        <Image style={{height: 200, width: 200}} source={{uri: image}} />
        <Text style={styles.text}>{`Description : \n${description}`}</Text>
        <Text style={styles.text}>{`Price : ${price}`}</Text>
        <Text style={styles.text}>{`Discount :  ${discount_amount}`}</Text>
        {isFavorite ? (
          <Button title={' Remove Favorite  '} onPress={_removeFromFavorite} />
        ) : (
          <Button title={'  Add to Favorite  '} onPress={_setToFavorite} />
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
