import React,{ useState, useEffect } from "react";
import {View,Text,StyleSheet,Image} from 'react-native';
import Onboarding from "./OnboardingScreen";

const Splash = () =>{
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
  
        // Wait for 3 seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 8000);
      }, []);

      return isLoading ? 
            <View style = {style.bgImage}>
            <Image source = {require('../assets/Digiride2.png')} style ={style.image}  /> 
               
            </View> :   <Onboarding/>
      

};

const style = StyleSheet.create({
    bgImage:{
        flex:1,
        backgroundColor:'#ef5a9b',
        justifyContent:'center',
    
    image:{
        marginLeft:-13,
        
    }

    }
})
export default Splash;