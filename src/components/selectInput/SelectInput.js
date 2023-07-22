import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./style";

const SelectInput = ({ selectedValue, onValueChange, data }) => {

    return (
        <View style={styles.container}>
            <Picker
                style={styles.picker}
                selectedValue={selectedValue}
                onValueChange={onValueChange}>
                {Object.keys(data).map((key) => (
                    <Picker.Item label={data[key]} value={data[key]} key={key} />
                ))}
            </Picker>
        </View>
    )
}

export default SelectInput;