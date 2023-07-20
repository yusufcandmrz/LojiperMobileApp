import React from "react";
import { View, TextInput, Text } from "react-native";
import styles from "./style";

const CustomTextInput = ({ value, onChangeText, placeholder, keyboardType, maxLength, secureTextEntry, selectedStyle }) => {

    return (
        <TextInput
            style={{ ...styles.textInput, ...selectedStyle }}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType={keyboardType}
            maxLength={maxLength}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={"orange"}
        />
    )
}

export default CustomTextInput