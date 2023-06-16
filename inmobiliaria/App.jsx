import React from 'react';
import {useColorScheme, View, SafeAreaView, StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import DepartmentElement from './src/components/DepartmentElement/DepartmentElement';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <DepartmentElement />
        <DepartmentElement />
        <DepartmentElement />
        <DepartmentElement />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});

export default App;
