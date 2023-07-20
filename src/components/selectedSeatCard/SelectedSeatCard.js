import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";

const SelectedSeatCard = ({ id, gender, identifyNumber }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Koltuk No: {id}</Text>
            <Text style={styles.text}>Cinsiyet: {gender}</Text>
            <Text style={styles.text}>Kimlik No: {identifyNumber}</Text>
        </View>
    )
}

export default SelectedSeatCard;