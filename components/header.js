import React from "react";
import { View,
    Text,
    StyleSheet

} from "react-native";

const header= ()=> {
    return(
        <View style={styles.header} >
            <Text style={styles.title} > TODY </Text>
            <Text style={styles.text}>
                What you think to do today ?
            </Text>
        </View>

    )
}
export default header;
const styles=StyleSheet.create({
    header:{
        height:70,
        backgroundColor:'#0077b6',
        paddingTop:25,
    },
    title:{
        textAlign:'center',
        fontSize:25,
        fontStyle:'italic'
    },
    text :{
        marginTop:20,
        paddingLeft:15,
        fontSize:15,
        

    }
})
