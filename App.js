import React, { useState } from 'react';
// import Splash from './components/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './components/OnboardingScreen';
import Home from './components/Home';
import SignUp from './components/SignUp';

const App =() =>{
  const [showOnboardingScreen,setShowOnboardingScreen] = useState(true);
  const handleOnboardFinish = ()=>{
    setShowOnboardingScreen(false);
  }
  
  const Stack = createNativeStackNavigator();
  return(
    <>
      {showOnboardingScreen && <OnboardingScreen handleDone={handleOnboardFinish} />}
      {!showOnboardingScreen && <SignUp/>}

      

    </>
  )

};

export default App
