import React from 'react';
import {View,Text,StyleSheet,Image,StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import { useFonts } from 'expo-font';
const data = [
    {
      title: 'Select Location',
      text: 'Enable your location and request a ride from anywhere in the world. Its easy with just a simple tap and few inputs',
      image: require('../assets/images/wait4.png'),
    
    },

    {
      title: 'Get a Ride',
      text: 'Our expert drivers will drive you safely to your destination. Following the travel guide and regulations.',
      image: require('../assets/images/ccc.png'),
    },
    {
      title: 'Rate our app',
      text: "Rating your experience helps us in improve the service given to you. Rate us and ride again",
      image: require('../assets/images/sx.png'),
    },
    // {
    //   title: "Let's Get started",
    //   text: "Easy peasy !",
    //   image: require('../assets/images/start.png'),
    // },
  ];

const OnboardingScreen = (props)=>{

  const [loaded]=useFonts({
 
    Montaga:require('../assets/fonts/Montaga-Regular.ttf'),
    Ubuntu: require('../assets/fonts/Ubuntu-Bold.ttf'),
    Nunito: require('../assets/fonts/NunitoSans-Black.ttf'),
    Raleway: require('../assets/fonts/Raleway-Black.ttf'),
    PlayfairDisplay: require('../assets/fonts/PlayfairDisplay-Medium.ttf'),

  })

  if (!loaded){
    return null;
  }
  

    const renderItem = ({item}) =>{
   
        return(
     
              <View style = {styles.container }>
                <Image source={item.image} style = {styles.image}/>
                <Text style = {styles.title}>{item.title}</Text>
                <Text style ={styles.text}> {item.text}</Text>
             </View>
                    
              
        
               
        )
    }

    const keyExtractor = (item) => item.title;  
    const renderDoneButton = ()=>{
      return(
        <View style = {styles.rightTextWrapper}>
          <Text style = {styles.rightText}>Done</Text>
        </View>
      )

    }
    const renderNextButton = () =>{
      return(
        <View style = {styles.rightTextWrapper}>
          <Text style = {styles.rightText}>Next</Text>
        </View>
      )
    }
    const renderPrevButton = ()=>{
      return(
        <View  style = {styles.leftTextWrapper}>
          <Text style = {styles.leftText}>Prev</Text>
        </View>
      )
    }
    
    const handleDone = () =>{
      props.handleDone();

    }

    return(
        <View style={{flex: 2}}>
        <StatusBar/> 
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          showPrevButton
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          data={data}
          onDone = {handleDone}
        />
      </View>
    )
}



const styles = StyleSheet.create({
container :{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffff' 
},

image:{
  marginVertical:60,
  width:250,
  height:200
},
title:{
  fontSize:36,
  textAlign:'center',
  fontFamily:'Montaga',
  marginHorizontal:50   
},
text:{
fontSize:16 ,
fontFamily:'Montaga',
textAlign:'center',
marginHorizontal:60,
marginTop:20

},
rightTextWrapper:{
  width:40,
  height:40,
  marginRight:20,
  justifyContent:'center',
  alignItems:'center'

},
rightText:{
fontSize:16,
color:'black',
fontFamily:'Montaga',


},
leftTextWrapper:{
  width:40,
  height:40,
  marginLeft:20,
  justifyContent:'center',
  alignItems:'center'
},
leftText:{
  fontSize:16,
  color:'black',
  fontFamily:' Montaga',
},
dotStyle:{
backgroundColor:'#EAE8E4'
},
activeDotStyle:{
backgroundColor:'purple'
}

// container_2:{
//   marginLeft:21,
//   marginTop:299,
//   justifyContent:'center',

// },
// container_3:{
//   marginLeft:21,
//   marginTop:-2,
//   justifyContent:'center',

// },
// image_2:{
//   marginTop:-199,
//   marginBottom:334,
//   marginLeft:48,
//   width:323,
//   height:299
// },

// image_3:{
//   marginTop:-556,
//   marginLeft:59,
//   width:264,
//   height:291
// },

// title:{
//   // marginTop:55,
//    marginLeft:63,
//   fontSize:31,
//   fontFamily:'Montaga'
// },
// title_2:{
//   marginTop:3,
//   marginLeft:111,
//   fontSize:36,
//   fontFamily:'Montaga'
// },
// title_3:{
//   marginTop:81,
//   marginLeft:94,
//   fontSize:36,
//   fontFamily:'Montaga'
// },
// text:{
//   marginLeft:23,
//   width:319,
//   marginTop:8,
//   fontSize:16,
//   textAlign:'center'
// },
// text_2:{
//   marginLeft:43,
//   width:319,
//   marginTop:15,
//   fontSize:16,
//   textAlign:'center'
// },
// text_3:{
//   marginLeft:69,
//   width:269,
//   marginTop:15,
//   fontSize:16,
//   textAlign:'center'
// }
})

export default OnboardingScreen;


