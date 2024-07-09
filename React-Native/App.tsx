import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Info1 from './src/Info1.tsx';
import Info2 from './src/Info2.tsx';
import Info3 from './src/Info3.tsx';
import PostDetail from './src/PostDetail.tsx';
import Tabs from './src/Tabs.tsx'; 

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Info1' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Info1" component={Info1} />
        <Stack.Screen name="Info2" component={Info2} />
        <Stack.Screen name="Info3" component={Info3} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
