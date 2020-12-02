import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../src/screens/detailsScreen';
import ProductsScreen from '../src/screens/productsScreen';

const Stack = createStackNavigator();
const App = () => {
  const stackProps = {hideStatusBar: true, screenOptions: {headerShown: false}};
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
