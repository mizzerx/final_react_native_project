import React, {useState, useEffect} from 'react';
import Splash from './screens/Splash';
import AllScreen from './screens/AllScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Splash');

  useEffect(() => {
    setTimeout(() => {
      console.log('Wating');
      setCurrentScreen('Login');
    }, 3000);
  }, []);

  let mainScreen = currentScreen === 'Splash' ? <Splash /> : <AllScreen />;

  return mainScreen;
};

export default App;
