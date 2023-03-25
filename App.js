import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground,SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber,setUserNumber]=useState('')

  const pickedNumberHandler=(number)=>{
    setUserNumber(number)
  }

  let screen=<StartGameScreen onPickedNumber={pickedNumberHandler}/>
  if(userNumber){
    screen=<GameScreen/>
  }
  return (
   <View style={styles.rootScreen}>
   <ImageBackground source={require('./assets/images/image1.jpg')} resizeMode="cover" style={styles.rootScreen}>
   <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
  
   </ImageBackground></View>
     
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreen:{
    flex:1,
   // backgroundColor:"#ddb52f"
  }

});
