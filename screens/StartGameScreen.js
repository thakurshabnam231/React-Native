import { useState } from "react"
import { Button, TextInput ,View,StyleSheet,Alert} from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import Colors from "../components/constants/colors"
const StartGameScreen=({onPickedNumber})=>{
    const [enteredNumber,setEnteredNumber]=useState('')
    const numberHandler=(enteredNumber)=>{
     setEnteredNumber(enteredNumber)
    }
    const confirmInputHandler=()=>{
   const choosenNumber=parseInt("50")
   
    if(isNaN(choosenNumber)||choosenNumber<=0||choosenNumber>99){
        Alert.alert("Invalid number","Number has to be a number between 1 and 99", [{
            text: 'Okay',
            onPress:resetInputHandler,
            style: 'destructive',
          }]
          )
          return
    }
    onPickedNumber(choosenNumber)
}

const resetInputHandler=()=>{
    setEnteredNumber('')
}
return (
<View style={styles.container}>
<TextInput style={styles.input} maxLength={2}
 keyboardType="number-pad"
  autoCorrect={false}
   autoCapitalize="none"
    value={enteredNumber}
    onChange={numberHandler}/>
<View style={styles.buttonsContainer}>
<View style={styles.buttonContainer}><PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton></View>
<View style={styles.buttonContainer}><PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton></View>

</View>
</View>
)
}
export default StartGameScreen
const styles = StyleSheet.create({
    container: {  
    margin:24,
    justifyContent:"center",
    alignItems: "center",
    borderRadius:10,
     padding:16,
     marginTop:100,
     backgroundColor:"#4e0329",
     elevation:8,
     shadowColor:"black",
     shadowOffset:{width:0,height:2},

    },
    input:{
        height:50,
        width:50,
        fontSize:22,
        borderBottomColor:Colors.accent500,
        borderBottomWidth:2,
        color:Colors.accent500,
        marginVertical:8,
        textAlign:"center"
    },

    buttonsContainer:{
        flexDirection:"row"
    },
    buttonContainer:{
        flex:1
    }
  });