// import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorage} from 'react-native';

const FAVORITES_KEY = '@ILLA:Favorites';

/**
 * @returns all favorite products
 */
export const getFavorites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : {};
  } catch (e) {}
};

/**
 * @param item item to set in storage {object}
 * @returns  favorite products
 */
export const setFavorite = async (item) => {
  try {
    let favorites = await getFavorites();
    favorites[item.id] = item;
    return await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {}
};

/**
 * @param item item to remove from favorite storage {object}
 * @returns  favorite products
 */
export const removeFavorite = async (item) => {
  try {
    let favorites = await getFavorites();
    delete favorites[item.id];
    return await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {}
};
