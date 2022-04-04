import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Form from './components/Form';

const App = () => (
  <SafeAreaProvider>
    <Form />
  </SafeAreaProvider>
);

export default App;
