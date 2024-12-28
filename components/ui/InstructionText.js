import { StyleSheet, Text, View } from "react-native";

import colors from "../../constants/colors";
function InstructionText({children, style})
{
    return (
        <Text style={[styles.textContainer, style]}>{children}</Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    textContainer:{
        fontSize: 16,
        color: colors.accent500,
        fontFamily: 'open-sans'
    }
})