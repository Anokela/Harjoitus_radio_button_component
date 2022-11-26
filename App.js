import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Radiobutton from './components/Radiobutton'

export default function App() {
  const [test, setTest] = useState(1)
  const options = [
    {
      label: 'Test 1',
      value: 1
    },
    {
      label: 'Test 2',
      value: 2,
    }
  ]
  return (
    <View style={styles.container}>
      <Radiobutton value={test} options={options} onPress={(value) => {setTest(value)}}/>
      <Text>Test {test} selected</Text>
    </View>
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
