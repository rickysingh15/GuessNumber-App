import { Text, StyleSheet, View, Platform } from "react-native";

function Title({children})
{
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        // fontWeight: 'bold',
        fontFamily: 'open-sans-bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: Platform.OS === 'ios' ? 0 : 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
});