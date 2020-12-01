import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../src/screens/detailsScreen';
import ProductsScreen from '../src/screens/productsScreen';
const Stack = createStackNavigator();

const App = () => {
  const stackProps = {hideStatusBar: true, screenOptions: {headerShown: false}};
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Stack.Navigator {...stackProps}>
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Products" component={ProductsScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
