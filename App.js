/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";


import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView ,Keyboard , TouchableWithoutFeedback  } from "react-native";

const image = { };


export default App = () => (


  
  <View style={styles.container}>

    <ImageBackground  source={require('./1.jpg')} style={styles.image}>
      
    <Image
        style={styles.tinyLogo}
        source={require('./fit-logo-Recovered1.png')}
      />
    <Text style={styles.header}>Enter OTP</Text>
    <Text style={styles.headerbar}>We have Send OTP on your Email Id</Text>

    <Text style={styles.headerbarOtp}>Email OTP</Text>


   
  <View style={{flex:0.6, justifyContent:'space-between',margin:100,flexDirection:'row',marginTop:35}}>

  <TextInput
//  onChangeText = {()=> this.setState({pin1 : pin2})}
  maxLength = {1}
   style={{backgroundColor:'#f5f4f2', fontWeight:'600', alignSelf:"center",fontSize:20,height:40,width:40,borderRadius:4,padding:10,alignItems:"center",justifyContent:"center",borderColor:"grey",textAlign:"center"}}>

   </TextInput>

   <TextInput
  // onChangeText = {()=> this.setState({pin2 : pin3})}
   maxLength = {1}
   style={{backgroundColor:'#f5f4f2', fontWeight:'600', alignSelf:"center",fontSize:20,height:40,width:40,borderRadius:4,padding:10,alignItems:"center",justifyContent:"center",borderColor:"grey",textAlign:"center"}}>
     
   </TextInput>

   <TextInput
 //  onChangeText = {()=> this.setState({pin3 : pin4})}
  maxLength = {1}
   style={{backgroundColor:'#f5f4f2', fontWeight:'600', alignSelf:"center",fontSize:20,height:40,width:40,borderRadius:4,padding:10,alignItems:"center",justifyContent:"center",borderColor:"grey",textAlign:"center"}}>
     
   </TextInput>

   <TextInput
// onChangeText = {()=> this.setState({pin3 : pin4})}
  maxLength = {1}
   style={{backgroundColor:'#f5f4f2', fontWeight:'600', alignSelf:"center",fontSize:20,height:40,width:40,borderRadius:4,padding:10,alignItems:"center",justifyContent:"center",borderColor:"grey",textAlign:"center"}}>
     
   </TextInput>

  </View>

 


  <View style={styles.socialbottom}>
  <TouchableOpacity style={styles.buttoncontainer}>
      <Text style={styles.headerbarButon}>Confirm</Text>
    </TouchableOpacity>

  </View>

   


    <View style={styles.bottom}>

    <TouchableOpacity style={styles.buttoncontainerForget}>
      <Text style={styles.headerbarButonForgot}>Resend Otp ?</Text>
    </TouchableOpacity>

    </View>


    </ImageBackground>
  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
  
    justifyContent: "center",
    
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  tinyLogo: {
    width: 130,
    height: 40,
    alignSelf: 'center',
    marginTop: 110,
    
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    marginBottom: 10,
    color: '#595856'
},
header : {
  fontSize : 20,
  color : '#f9a717',
  alignSelf: 'center',
  marginTop: 50,

},
headerbar : {
  fontSize : 10,
  color : '#fff',
  alignSelf: 'center',
  marginTop: 10,

},
headerbarOtp : {
  fontSize : 15,
  color : '#fff',
  alignSelf: 'center',
  marginTop: 60,
  fontWeight:  "bold",

},

headerbarButon : {
  fontSize : 18,
  color : '#fff',
  alignSelf: 'center',
  

},
textinput : {
  alignSelf : 'center',
  height : 40,
  width : 300,
  paddingLeft : 40,
  marginBottom: 20,
  color : '#fff',
  borderBottomColor: '#f8f8f8',
  borderBottomWidth : 1,
  marginTop: 20,

}, 
buttoncontainer : {
  height : 46,
  width : 250,
  borderRadius : 46,
  backgroundColor : '#f9a717',
  paddingVertical: 10,
  justifyContent: 'center',
  alignSelf : 'center',
  marginBottom: -150
},
ImageStyle: {
  padding: 10,
  margin: 5,
  height: 25,
  width: 25,
  resizeMode : 'stretch',
  alignItems: 'center'
},
passwordContainer: {
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderColor: '#000',
  paddingBottom: 10,
  alignSelf : 'center',
  height : 80,
  width : 300,
},
inputStyle: {
  flex: 1,
},
SectionStyleUsername: {
  flexDirection: 'row',
  width : 350,
  backgroundColor: '#00000000',
  borderColor: '#00000000',
  height: 40,
  alignSelf:'center',
  marginTop: 30,

 
  margin: 10,
},
SectionStyle: {
  flexDirection: 'row',
  width : 350,
  backgroundColor: '#00000000',
  borderColor: '#00000000',
  height: 40,
  alignSelf:'center',
  marginTop: 20,

 
  margin: 10,
},
ImageStyle: {
  padding: 10,
  margin: 5,
  left : 30,
  height: 25,
  width: 25,
  resizeMode: 'stretch',
  alignItems: 'center',
},
buttoncontainerForget : {
  height : 40,
  width : 250,
  borderRadius : 40,
  backgroundColor : '#00000000',
  paddingVertical: 10,
  justifyContent: 'center',
  alignSelf : 'center',
  marginBottom: 0
},
headerbarButonForgot : {
  fontSize : 13,
  color : '#fff',
  alignSelf: 'center',
  

},
buttoncontainerSignIn : {
  height : 40,
  width : 250,
  borderRadius : 40,
  backgroundColor : '#00000000',
  paddingVertical: 10,
  justifyContent: 'center',
  alignSelf : 'center',
  marginBottom: 0,
},
headerbarButonSignIn : {
  fontSize : 13,
  color : '#fff',
  alignSelf: 'center',
  

},
MainContainer: 
{

flex: 1,
backgroundColor : '#00000000',
// Set content's vertical alignment.
justifyContent: 'center',

// Set content's horizontal alignment.
alignItems: 'center',


},

  ImageClass:
  {
    // Setting up image width.
    width: 24,
    alignSelf : 'center',
    alignItems : 'center',
    // Setting up image height.
    height: 24,

  },
  socialcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: -600,
  },
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
},
img: {
  flex: 1,
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  height : 36,
  width:36
},
btn: {
  flex: 1,
  height:24,
  width:24,
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent'
},
btnLeft: {
  flex: 1,
  height:24,
  width:24,
  left : 85,
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent'
},
btnRight: {
  flex: 1,
  height:24,
  width:24,
  left : -85,
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent'
},
socialbottom: {
  flex: 1,
  flexDirection: 'row',

  justifyContent: 'center',
  marginBottom: 125,
},
bottom: {
  flex: 1,
  justifyContent: 'center',
  flexDirection: 'row',
  marginBottom: 150
},

});


// https://reactnative.dev/docs/layout-props#left,