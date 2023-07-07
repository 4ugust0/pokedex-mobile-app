import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Pages
import AppHome from "./src/screens/home/page";
import PokeHome from "./src/screens/pokeHome/page";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={AppHome} />
        <Stack.Screen name="PokeHome" component={PokeHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
