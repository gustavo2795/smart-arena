import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/pages';
import Login from './src/pages/login';

export default function App() {
  return (
      <Login></Login>
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
