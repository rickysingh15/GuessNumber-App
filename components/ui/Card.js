import { StyleSheet, Text, View, Dimensions } from "react-native";

import colors from "../../constants/colors";

function Card({children})
{
    return (
        <View style={styles.Card}>{children}</View>
    );
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    Card:{
        marginTop:deviceWidth < 380 ? 18 : 36,
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
        alignItems: 'center',
        maxWidth: '80%',
        width: 300
    }
});