import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <provider store = {store}>
    <View style={styles.container}>
      <Text>AdRides</Text>
      <StatusBar style="auto" />
    </View>
    </provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
