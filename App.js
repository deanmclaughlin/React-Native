import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DayCount from './DayCount';
import BdayHome from './BdayHome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <View style={styles.container}>
        <Stack.Navigator screenOptions={{headerShown: false}}>      
          <Stack.Screen name="Birthday Tool" component={BdayHome} />
          <Stack.Screen name="Day Count" component={DayCount} />         
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "50vw"
  }
});
