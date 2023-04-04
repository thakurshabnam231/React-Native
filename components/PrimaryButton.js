import {View,Text,Pressable,StyleSheet} from "react-native"
import Colors from "../components/constants/colors"
const PrimaryButton=({children,onPress})=>{
   
    return(
        <View style={styles.outerContainer}>
        <Pressable onPress={onPress} android_ripple={{color:Colors.primary600}} style={styles.innerContainer}>
         <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
        </View>
    )
}
export default PrimaryButton
const styles = StyleSheet.create({
    outerContainer:{
        margin:4,
        borderRadius:28,
       overflow:"hidden"
    },
    innerContainer:{
        backgroundColor:Colors.primary500,
       
        paddingVertical:8,
        paddingHorizontal:18,
        elevation:2,
        margin:4
    },
    buttonText:{
        color:"white",
        textAlign:"center"
    }
})