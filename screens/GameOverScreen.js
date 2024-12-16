import { Text, View, StyleSheet } from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({onGameOver})
{
    return (
        <View style={styles.rootContainer}>
            <View>
                <Title>Game Over</Title>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={onGameOver}>Restart</PrimaryButton>
            </View>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
        margin:24
    },

    buttonContainer:{
        margin:16,
        padding:8
    }
});