import { TouchableOpacity , StyleSheet , Text} from "react-native"
import color from "../color"
export default function Button ( {theme, title, onPress}){
    if(theme =="principal"){
    return(
        <TouchableOpacity style={styles.primary} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
    }
}

const styles = StyleSheet.create({
    primary:{
        backgroundColor: color.verdecito,
        padding: 15,
        borderRadius: 10,
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    text:{
        color: color.blanquito,
        fontSize: 20,
        fontWeight: 'bold',
    }
})