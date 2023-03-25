import { View,Text ,StyleSheet} from "react-native"
import Title from "../components/Title"

const GameScreen=()=>{
    return(
<View style={styles.screen}>
<Title>Opponents guess</Title>

<View><Text>Higher or lower</Text></View>
<View></View>
</View>
    )
}
export default GameScreen
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding:40,
     
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        color:"#ddb52f",
        borderWidth:2,
        borderColor:"#ddb52f",
        borderWidth:2,
        textAlign:"center",
        padding:10,
        marginTop:20
    }
   
  
  });
  