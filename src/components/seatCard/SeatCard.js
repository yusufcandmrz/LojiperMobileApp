import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, ToastAndroid } from "react-native";
import styles from "./style";
import trips from "../../../trips";
import { useSelector, useDispatch } from "react-redux";
import Icon from "@expo/vector-icons/Fontisto";

const SeatCard = ({ item, tripId, gender, identifyNumber }) => {

    const dispatch = useDispatch();
    const selectedSeats = useSelector(state => state.selectedSeats);
    const [seatStyle, setSeatStyle] = useState(styles.emptySeat);
    const userGender = useSelector(state => state.userGender);
    const [isSelected, setIsSelected] = useState(false);
    const [seatGender, setSeatGender] = useState("")

    useEffect(() => {
        if (item.dolu) {
            if (item.cinsiyet == "Kadın") {
                setSeatStyle(styles.occupiedSeatFemale);
                setSeatGender("female")
            } else {
                setSeatStyle(styles.occupiedSeatMale);
                setSeatGender("male")
            }
        }
    }, [])

    useEffect(() => {
        const selectedSeatDetails = {
            seatNumber: item.numara,
            seatGender: gender,
            seatIdentifyNumber: identifyNumber,
        }
        if (isSelected) {
            dispatch({ type: 'ADD_TO_SELECTEDSEATS', payload: selectedSeatDetails });
        }
        else {
            dispatch({ type: 'REMOVE_FROM_SELECTEDSEATS', payload: item.numara })
        }
    }, [isSelected])

    if (item.numara % 3 == 1) {
        itemContainerStyle = [styles.container, { marginRight: 30 }];
    }

    if (item.numara % 3 == 2) {
        itemContainerStyle = [styles.container, { marginRight: 5 }];
    }

    const handleSelectSeat = () => {
        if (gender == "" || identifyNumber == "") {
            ToastAndroid.show("Lütfen Koltuk Seçmeden Önce Tüm Alanları Doldurun", ToastAndroid.TOP)
        }
        else if (isSelected) {
            setSeatStyle(styles.emptySeat)
            setIsSelected(false);
        }
        else if (item.cinsiyet) {
            ToastAndroid.show("Bu Koltuk Zaten Seçilmiş", ToastAndroid.TOP)
        }
        else if (item.numara % 3 == 2) {
            const nextSeat = trips[tripId - 1].koltuklar[item.numara]

            if (nextSeat.cinsiyet == "Erkek" && userGender == "Kadın") {
                ToastAndroid.show("Kadın Kullanıcılar Erkek Yolcuların Yanına Bilet Alamaz", ToastAndroid.TOP)
            }
            else {
                if (selectedSeats.length == 5) {
                    ToastAndroid.show("En Fazla 5 Bilet Alabilirsiniz", ToastAndroid.TOP)
                }
                else {
                    setSeatStyle(styles.selectedSeat);
                    setIsSelected(true)
                }
            }
        }
        else if (item.numara % 3 == 0) {

            const nextSeat = trips[tripId - 1].koltuklar[item.numara - 2]

            if (nextSeat.cinsiyet == "Erkek" && userGender == "Kadın") {
                ToastAndroid.show("Kadın Kullanıcılar Erkek Yolcuların Yanına Bilet Alamaz", ToastAndroid.TOP)
            }
            else {
                if (selectedSeats.length == 5) {
                    ToastAndroid.show("En Fazla 5 Bilet Alabilirsiniz", ToastAndroid.TOP)
                }
                else {
                    setSeatStyle(styles.selectedSeat);
                    setIsSelected(true)
                }
            }
        }
        else {
            if (selectedSeats.length == 5) {
                ToastAndroid.show("En Fazla 5 Bilet Alabilirsiniz", ToastAndroid.TOP)
            }
            else {
                setSeatStyle(styles.selectedSeat);
                setIsSelected(true)
            }
        }
    }

    return (
        <View>
            <TouchableOpacity style={[itemContainerStyle, seatStyle]} onPress={handleSelectSeat}>
                {seatGender && <Icon name={seatGender} size={15} color={"orange"} />}
                <Text style={styles.text}>{item.numara}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SeatCard;