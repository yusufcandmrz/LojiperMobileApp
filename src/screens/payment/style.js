import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3"
    },
    tickedDetails: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "orange",
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    paymentContainer: {
        flex: 1,
    },
    innerPaymentContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    spinner: {
        flex: 1,
        position: "absolute",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    text:{
        color: "orange",
        fontSize: 15,
    }
})