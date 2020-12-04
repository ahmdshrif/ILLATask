import React, {useState, useEffect, useMemo} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import {SearchBar, Icon} from 'react-native-elements';
import ProductCard from '../../components/product_card';
import {get_Products} from '../../utils/api';

const Products = (props) => {
  const initPagingState = {
    page: 0,
    pages: 1,
  };
  //***************************************** */
  //             state
  //***************************************** */
  const [SearchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState();
  const [AllProducts, setAllProducts] = useState([]);
  const [Result_pagination, set_Result_pagination] = useState(initPagingState);
  const [Search_pagination, set_Search_pagination] = useState(initPagingState);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [IsLoad, setIsLoad] = useState(false);
  const [error, setError] = useState('');
  //***************************************** */
  //             Effects                      //
  //***************************************** */
  const _onStart = () => {
    _get_Products();
  };
  useEffect(_onStart, []);
  //***************************************** */
  //             local functions              //
  //***************************************** */
  const _make_request = async (requestFunction, pagination) => {
    const {page, pages} = pagination;
    if (page >= pages) {
      return;
    }
    try {
      setIsLoad(true);
      await requestFunction(page);
      setError('');
      setIsLoad(false);
    } catch (error) {
      setIsLoad(false);
      setError(error.message);
    }
  };
  const _get_Products = async () => {
    await _make_request(async (page) => {
      const data = await get_Products({});
      setAllProducts(data.data);
      set_Result_pagination(data.meta.pagination);
    }, Result_pagination);
  };
  const _get_more_Products = () => {
    _make_request(async (page) => {
      const data = await get_Products({page: page + 1});
      setAllProducts([...AllProducts, ...data.data]);
      set_Result_pagination(data.meta.pagination);
    }, Result_pagination);
  };
  const _get_Search_Products = () => {
    _make_request(async () => {
      const data = await get_Products({name: search});
      setSearchResult(data.data);
      set_Search_pagination(data.meta.pagination);
    }),
      Search_pagination;
  };
  const _get_more_Search_Products = () => {
    _make_request(async (page) => {
      const data = await get_Products({page: page + 1, name: search});
      setSearchResult([...AllProducts, ...data.data]);
      set_Search_pagination(data.meta.pagination);
    }),
      Search_pagination;
  };

  const onEndReached = () => {
    isSearchMode ? _get_more_Search_Products() : _get_more_Products();
  };

  const onSubmitEditing = () => {
    setIsSearchMode(true);
    _get_Search_Products();
  };
  const onCancelSearch = () => {
    setIsSearchMode(false);
  };

  //***************************************** */
  //             RenderProps                  //
  //***************************************** */

  const ListFooterComponent = () => {
    if (IsLoad) {
      return <ActivityIndicator size={'large'} color={'#fcb040'} />;
    }
    return null;
  };
  const searchIcon = <Icon name="search" color="#fcb040" size={30} />;
  const renderItem = ({item}) => <ProductCard Data={item} />;

  //***************************************** */
  //             UI
  //***************************************** */
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar
          platform="ios"
          //   platform={Platform.OS === 'ios' ? 'ios' : 'android'}
          placeholder="Search about product "
          placeholderTextColor="#e6e6e6"
          searchIcon={searchIcon}
          onChangeText={setSearch}
          value={search}
          enablesReturnKeyAutomatically={true}
          returnKeyType="search"
          onSubmitEditing={onSubmitEditing}
          inputStyle={{fontSize: 14}}
          showCancel
          onCancel={onCancelSearch}
          containerStyle={styles.SearchContainerStyle}
          disabledInputStyle={styles.disabledInputStyle}
          inputContainerStyle={styles.inputContainerStyle}
        />
      </View>
      {isSearchMode && !SearchResult.length && !IsLoad && !error && (
        <Text>No Result</Text>
      )}
      <Text style={{color: 'red'}}>{error}</Text>
      <FlatList
        data={isSearchMode ? SearchResult : AllProducts}
        extraData={{AllProducts, SearchResult}}
        onEndReachedThreshold={0.7}
        onEndReached={onEndReached}
        renderItem={renderItem}
        ListFooterComponent={ListFooterComponent}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        // initialNumToRender={20}
        // maxToRenderPerBatch={50}
        // updateCellsBatchingPeriod={50}
        // windowSize={30}
      />
    </View>
  );
};

//***************************************** */
//             propTypes                    //
//***************************************** */
Products.propTypes = {};

//***************************************** */
//             styles                       //
//***************************************** */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  header: {
    height: 50,
    width: '100%',
  },
  SearchContainerStyle: {
    flex: 1,
    height: 35,
    backgroundColor: null,
    borderColor: 'white',
    borderWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  disabledInputStyle: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 0,
    borderRadius: 100,
    fontSize: 5,
  },
  inputContainerStyle: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 0,
    height: 44,
    borderRadius: 9,
  },
  iconContainer: {
    marginTop: 20,
    marginRight: 10,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: '#fcb040',
  },
});

export default Products;
