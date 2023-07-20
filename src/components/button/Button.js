import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

const CustomButton = ({ buttonTitle, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;