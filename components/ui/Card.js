import { StyleSheet, Text, View } from "react-native";

import colors from "../../constants/colors";

function Card({children})
{
    return (
        <View style={styles.Card}>{children}</View>
    );
}

export default Card;

const styles = StyleSheet.create({
    Card:{
        marginTop:80,
        padding:16,
        backgroundColor: colors.primary800,
        borderRadius: 8,
        marginHorizontal: 24,
        elevation: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2}, 
        shadowRadius: 6,
        shadowOpacity: 0.25,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});