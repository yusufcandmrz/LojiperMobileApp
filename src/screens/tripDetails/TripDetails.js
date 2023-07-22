import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ToastAndroid } from "react-native";
import trips from "../../assets/trips";
import SeatCard from "../../components/seatCard/SeatCard";
import styles from "./style";
import { useSelector } from "react-redux";
import SelectedSeatCard from "../../components/selectedSeatCard/SelectedSeatCard";
import CustomTextInput from "../../components/textInput/TextInput";
import CustomButton from "../../components/button/Button"
import { useNavigation } from "@react-navigation/native";
import SelectInput from "../../components/selectInput/SelectInput";
import genders from "../../assets/genders";

const TripDetails = ({ route }) => {

    const navigation = useNavigation();
    const { tripId } = route.params;
    const [tripDetails, setTripDetails] = useState([]);
    const [seats, setSeats] = useState([]);
    const selectedSeats = useSelector(state => state.selectedSeats);
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedIdentifyNumber, setSelectedIdentifyNumber] = useState("");

    useEffect(() => {
        setTripDetails(trips[tripId - 1]);
    }, [])

    useEffect(() => {
        setSeats(tripDetails.koltuklar);
    }, [tripDetails])

    const renderItem = ({ item }) => {
        return (
            <SeatCard
                item={item}
                tripId={tripDetails.id}
                gender={selectedGender}
                identifyNumber={selectedIdentifyNumber}
            />
        )
    }

    const selectedSeatRenderItem = ({ item }) => {
        return (
            <SelectedSeatCard
                id={item.seatNumber}
                gender={item.seatGender}
                identifyNumber={item.seatIdentifyNumber}
            />
        )
    }

    const handlePaymentButton = () => {
        if (selectedSeats.length == 0) {
            ToastAndroid.show("Lütfen Koltuk Seçiniz", ToastAndroid.TOP);
        }
        else {
            navigation.navigate("Ödeme", { tripId: tripId, totalPrice: selectedSeats.length * trips[tripId - 1].biletFiyati, totalSelectedSeats: selectedSeats.length });
        }
    }

    return (

        <View style={styles.container}>
            {tripDetails &&
                <View>
                    <View style={styles.tripDetails}>
                        <Text style={styles.text}>{tripDetails.firma}</Text>
                        <Text style={styles.text}>{tripDetails.kalkisNoktasi}-{tripDetails.varisNoktasi}</Text>
                        <Text style={styles.text}>{tripDetails.tarih}</Text>
                        <Text style={styles.text}>{tripDetails.saat}</Text>
                        <Text style={styles.text}>{tripDetails.biletFiyati}TL</Text>
                    </View>
                    <View>
                        <View style={styles.flatlistContainer}>
                            <FlatList
                                style={styles.seatsFlatlist}
                                data={seats}
                                renderItem={renderItem}
                                numColumns={3}
                            />
                            <View style={styles.selectedSeatsFlatlistContainer}>
                                <View style={styles.selectSeatInputContainer}>
                                    <SelectInput selectedValue={selectedGender} onValueChange={setSelectedGender} data={genders} />
                                    <CustomTextInput
                                        value={selectedIdentifyNumber}
                                        onChangeText={setSelectedIdentifyNumber}
                                        placeholder={"TCKN Giriniz"}
                                        maxLength={11}
                                    />
                                </View>
                                <FlatList
                                    style={styles.selectedSeatsFlatlist}
                                    data={selectedSeats}
                                    renderItem={selectedSeatRenderItem}
                                />
                            </View>
                        </View>
                        <View style={styles.bottomContainer}>
                            <Text style={styles.price}>{selectedSeats.length * trips[tripId - 1].biletFiyati}TL</Text>
                            <CustomButton buttonTitle={"Öde"} onPress={handlePaymentButton} />
                        </View>
                    </View>
                </View>
            }
        </View>
    )
}

export default TripDetails;