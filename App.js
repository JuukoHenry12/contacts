import 'react-native-gesture-handler';
import * as React from 'react';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Providers'
const App = () => {
  return(
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};
export default App;
