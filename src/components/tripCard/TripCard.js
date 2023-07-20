import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const TripCard = ({ item }) => {

    const navigation = useNavigation();

    const emptySeats = (item.koltuklar.filter(koltuk => koltuk.dolu === false)).length;

    function handleTripCard() {
        navigation.navigate("Sefer Detayları", { tripId: item.id });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleTripCard}>
            <Text style={styles.text}>{item.firma}</Text>
            <Text style={styles.text}>{item.kalkisNoktasi} - {item.varisNoktasi}</Text>
            <Text style={styles.text}>{item.saat}</Text>
            <Text style={styles.text}>{emptySeats}</Text>
            <Text style={styles.text}>{item.biletFiyati}TL</Text>
        </TouchableOpacity>
    )
}

export default TripCard;