import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../src/screens/detailsScreen';
import ProductsScreen from '../src/screens/productsScreen';
import ErrorBoundary from './components/error_boundary';
const Stack = createStackNavigator();
const App = () => {
  const stackProps = {hideStatusBar: true, screenOptions: {headerShown: false}};
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default App;
