import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    tripDetails: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderColor: "orange",
    },
    flatlistContainer: {
        flexDirection: "row"
    },
    seatsFlatlist: {
        flex: 1,
        alignSelf: "flex-start",
        borderRightWidth: 1,
        borderColor: "orange",
        marginRight: 10,
    },
    selectedSeatsFlatlistContainer: {
        flex: 1,
    },
    selectSeatInputContainer: {
        borderBottomWidth: 1,
        borderColor: "orange",
    },
    selectedSeatsFlatlist: {
        flex: 1,
    },
    bottomContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    price: {
        marginHorizontal: 20,
        alignSelf: "center",
        color: "orange",
    },
    text: {
        color: "orange",
        fontSize: 15,
    }
})