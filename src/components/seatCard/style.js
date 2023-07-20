import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "orange",
    },
    emptySeat: {
        backgroundColor: "white",
    },
    occupiedSeatMale: {
        backgroundColor: "#00a5ff",
    },
    occupiedSeatFemale: {
        backgroundColor: "pink",
    },
    selectedSeat: {
        backgroundColor: "#90EE90",
    },
    text: {
        color: "orange",
    }
})