import {View, Text, StyleSheet} from 'react-native';

import LogContainer from './LogContainer';
import colors from '../../constants/colors';
function LogItem(props)
{
    return (
        <View>
            <LogContainer>{props.number}</LogContainer>
        </View>
    );
}

export default LogItem;

const styles = StyleSheet.create({
    rootContainer:{
        backgroundColor: colors.primary800,
        padding: 8,
        margin:8
    }
});