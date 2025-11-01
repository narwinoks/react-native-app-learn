import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingScreen() {
  const handlerGetStarted = ()=>{
    router.replace("/login");
  }
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/onboarding/onboarding.png")}  style={styles.backgroundImage}></Image>
      <LinearGradient colors={['transparent','rgba(0,0,0,0.7)']} style={styles.overlay}></LinearGradient>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to Eshop</Text>
        <Text style={styles.subtitle}>Discover amazing products and shop with ease</Text>
        <TouchableOpacity style={styles.buttom} onPress={handlerGetStarted}>
          <LinearGradient colors={["#FF6B6B","#4A66F0"]} start={{  x: 0 ,y :0}} end={{x :1 ,y : 0}} style={styles.buttonGradient}>
            <Text style={styles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const {width,height} =Dimensions.get("window");
const styles =StyleSheet.create({
    container:{
        flex :1,
        width:"100%",
        height :"100%"
    },
    backgroundImage :{
      width,
      height,
      position: 'absolute',
      top :0,
      left : 0,
      resizeMode :'cover'
    },
    overlay :{
      position :'absolute',
      height : 0.6  * height,
      top : 0,
      left : 0
    },
    contentContainer :{
      flex:1,
      justifyContent: 'flex-end',
      alignItems:'center',
      paddingBottom : 50,
      paddingHorizontal : 20
    },
    title:{
      fontSize : 32,
      fontWeight :'bold',
      color :'#FFFFFF',
      marginBottom : 10,
      textAlign :'center'
    },
    subtitle :{
      fontSize :20,
      color :'#FFFFFF',
      marginBottom :30,
      textAlign :'center',
      opacity:0.8
    },
    buttom :{
      width : '100%',
      marginTop : 20,
      borderRadius : 10,
      overflow :'hidden'
    },
    buttonGradient :{
      paddingVertical:  15,
      alignItems :'center',
      justifyContent :'center'
    },
    buttonText :{
      color :"#FFFFFF",
      fontSize : 18,
      fontWeight :'bold'
    }
})