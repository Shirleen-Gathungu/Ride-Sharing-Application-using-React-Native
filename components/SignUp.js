import React from "react";
import {View,Text,StyleSheet,Image,Pressable} from 'react-native';
import { useFonts } from 'expo-font';

const SignUp = ()=>{

    const [loaded]=useFonts({
 
        Montaga:require('../assets/fonts/Montaga-Regular.ttf'),
        Ubuntu: require('../assets/fonts/Ubuntu-Bold.ttf'),
      })
    
      if (!loaded){
        return null;
      }
      
    
    return(
    
        <View>

       <Image style = {styles.image} source={require('../assets/images/start.png')}/>
       <Text style = {styles.text}>Move with Safety</Text>
       
        </View>
    )
}

const styles = StyleSheet.create({
   
        image:{
            marginVertical:150,
            marginLeft:65,
            width:250,
            height:262
    
    },
    text:{
        fontSize:36,
        textAlign:'center',
        fontFamily:'Montaga',
        marginHorizontal:50 ,  
        marginTop:-87
      },

      button: {
        alignItems:'center',
        backgroundColor:'#2596be',
        paddingVertical: 12,
        paddingHorizontal: 22,
        marginTop:78,
        marginLeft:52,
        marginRight:52,
        borderRadius:92,
        // background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

       
      },
      text_2: {
        fontSize: 18,
        lineHeight: 21,
        fontFamily:'Montaga',
        letterSpacing: 0.25,
        color: 'white',
      },

})
export default SignUp;