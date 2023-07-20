import React, { useState } from "react";
import { View, Alert, ToastAndroid, Text, ActivityIndicator } from "react-native";
import styles from "./style";
import CustomTextInput from "../../components/textInput/TextInput";
import CustomButton from "../../components/button/Button";
import trips from "../../../trips";
import { useNavigation } from "@react-navigation/native";

const Payment = ({ route }) => {

    const [cardNumber, setCardNumber] = useState();
    const [cardOwner, setCardOwner] = useState();
    const [cardExpretionDate, setCardExpretionDate] = useState();
    const [cardCvc, setCardCvc] = useState();
    const { tripId, totalPrice, totalSelectedSeats } = route.params;
    const [spinnerVisibility, setSpinnerVisibility] = useState(false)
    const navigation = useNavigation();

    const handlePayment = () => {
        if (cardNumber == null || cardOwner == null || cardExpretionDate == null || cardCvc == null) {
            ToastAndroid.show("Lütfen Tüm Alanları Doldurun", ToastAndroid.TOP);
        }
        else {
            setSpinnerVisibility(true);
            setTimeout(() => {
                setSpinnerVisibility(false);
                ToastAndroid.show("İşlem Başarıyla Gerçekleştirildi", ToastAndroid.TOP);
                navigation.navigate("Başarım")
            }, 1000);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.tickedDetails}>
                <Text style={styles.text}>Firma Adı: {trips[tripId - 1].firma}</Text>
                <Text style={styles.text}>Kalkış-Varış Noktası: {trips[tripId - 1].kalkisNoktasi}-{trips[tripId - 1].varisNoktasi}</Text>
                <Text style={styles.text}>Sefer Tarihi: {trips[tripId - 1].tarih}</Text>
                <Text style={styles.text}>Sefer Saati: {trips[tripId - 1].saat}</Text>
                <Text style={styles.text}>Seçilen Koltuk Sayısı: {totalSelectedSeats}</Text>
                <Text style={styles.text}>Toplam Tutar: {totalPrice}TL</Text>
            </View>
            <View style={styles.paymentContainer}>
                <CustomTextInput value={cardNumber} onChangeText={setCardNumber} placeholder={"Kart Numarasını Giriniz"} maxLength={16} keyboardType={"numeric"} />
                <CustomTextInput value={cardOwner} onChangeText={setCardOwner} placeholder={"Kart Sahibinin İsmini Giriniz"} />
                <View style={styles.innerPaymentContainer} >
                    <CustomTextInput value={cardExpretionDate} onChangeText={setCardExpretionDate} placeholder={"Son Kullanma Tarihi Giriniz"} maxLength={5} />
                    <CustomTextInput value={cardCvc} onChangeText={setCardCvc} placeholder={"CVC/CV2"} maxLength={3} keyboardType={"numeric"} />
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton buttonTitle={"Öde"} onPress={handlePayment} />
                    <CustomButton buttonTitle={"İptal Et"} />
                </View>
            </View>
            {spinnerVisibility && <ActivityIndicator style={styles.spinner} size={"large"} />}

        </View>
    )
}

export default Payment;