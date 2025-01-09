import {View, StyleSheet, Text, TextComponent} from 'react-native';
import colors from '../../constants/colors';

function LogContainer({children})
{
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.TextContainer}>{children}</Text>
        </View>
    );

}

export default LogContainer;

const styles = StyleSheet.create({
    rootContainer:{
        backgroundColor: colors.accent500,
        width: '100%',
        margin: 8,
        padding: 8
    },

    TextContainer:{
        color: colors.primary800,
        textAlign: 'center',
        fontSize: 16
    }
});

