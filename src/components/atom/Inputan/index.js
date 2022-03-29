import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import colors from '../../../utils/colors';

const Inputan = ({label, value, onChangeText, secureTextEntry, disable, keyboardType}) => {
    const [border, setBorder] = useState(colors.border);
    const onFocusform = () => {
        setBorder(colors.primary);
    };
    const onBlurform = () => {
        setBorder(colors.text.primary);
    };
    return (
        <View>
            <Text style = {styles.label}> {label} </Text>
            <TextInput onFocus={onFocusform} onBlur={onBlurform} style = {styles.input(border)} value ={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} editable={!disable} selectTextOnFocus={!disable} keyboardType = {keyboardType} />
        </View>

    )
}
export default Inputan;
const styles = StyleSheet.create({
    label: {
        fontSize: 12,
        color: "#000",
        marginBottom: 6,
    },
    input: (border) => (
        {
            borderWidth: .2,
            borderColor: border,
            borderRadius: 10,
            padding: 12,
            backgroundColor: "#F3F5F7"
        }
    )
});