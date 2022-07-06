import React from "react";
import { View,
    Text,
    StyleSheet

} from "react-native";

const header= ()=> {
    return(
        <View style={styles.header} >
            <Text style={styles.title} > TODY </Text>
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
        fontSize:25

    }
})