import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#D3D3D3"
    },
    pickerContainer: {
        marginVertical: 10,
    },
    picker: {
        borderWidth: 1,
        borderColor: "orange",
        borderRadius: 10,
    },
    selectDateStyle: {
        marginTop: 20,
    },
    selectText: {
        color: "orange",
        fontWeight: "bold",
    },
    button: {
        alignSelf: "flex-end",
    },
    pickerText: {
        alignSelf: "center",
        color: "orange",
        fontWeight: "bold",
    }
});