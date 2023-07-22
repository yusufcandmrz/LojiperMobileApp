import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./style";
import trips from "../../assets/trips";
import TripCard from "../../components/tripCard/TripCard";

const TripList = ({ route }) => {

    const { departurePoint, arrivalPoint, tripDate } = route.params;
    const [tripList, setTripList] = useState([]);

    useEffect(() => {
        const filteredTrips = trips.filter(trip => trip.tarih == tripDate && trip.kalkisNoktasi == departurePoint && trip.varisNoktasi == arrivalPoint);
        setTripList(filteredTrips);
    }, []);

    const renderItem = ({ item }) => {
        return (
            <TripCard item={item} />
        )
    }

    return (
        <View style={styles.container}>
            {tripList.length == 0 && <Text style={styles.message}>SEFER BULUNMAMAKTADIR!</Text>}
            <FlatList data={tripList} renderItem={renderItem} />
        </View >
    )
}

export default TripList;