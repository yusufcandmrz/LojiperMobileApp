import React, { useState } from "react";
import { View, ScrollView, ToastAndroid } from "react-native";
import styles from "./style";
import CustomButton from "../../components/button/Button";
import CustomTextInput from "../../components/textInput/TextInput";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

import { useDispatch } from "react-redux";

const SignUp = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [identifyNumber, setIdentifyNumber] = useState(null);
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const navigation = useNavigation();

    const handleSignUpButton = () => {
        if (name == "" || surname == "" || identifyNumber == null || birthDate == "" || gender == "" || email == "" || password == "" || passwordAgain == "") {
            ToastAndroid.show('Lütfen Tüm Alanları Doldurun', ToastAndroid.TOP);
        }
        else if (password != passwordAgain) {
            ToastAndroid.show('Girmiş Olduğunuz Şifreler Uyuşmuyor!', ToastAndroid.TOP);
        }
        else {
            const updatedUser = {
                userName: name,
                userSurname: surname,
                userIdentifyNumber: identifyNumber,
                userBirthDate: birthDate,
                userGender: gender,
                userEmail: email,
                userPassword: password,
            };
            console.log(updatedUser)
            dispatch({ type: 'UPDATE_USER', payload: updatedUser });
            ToastAndroid.show('Üyeliğiniz Oluşturuldu!', ToastAndroid.TOP);
            navigation.navigate("Giriş");
        }
    }
    const handleBackButton = () => {
        navigation.goBack();
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <CustomTextInput
                    value={name}
                    onChangeText={setName}
                    placeholder={"Adı Giriniz"}
                />
                <CustomTextInput
                    value={surname}
                    onChangeText={setSurname}
                    placeholder={"Soyadı Giriniz"}
                />
                <CustomTextInput
                    value={identifyNumber}
                    onChangeText={setIdentifyNumber}
                    placeholder={"Kimlik Numarasını Giriniz"}
                    keyboardType={"numeric"}
                    maxLength={11}
                />
                <CustomTextInput
                    value={birthDate}
                    onChangeText={setBirthDate}
                    placeholder="Doğum Tarihi Giriniz (GG.AA.YYYY)"
                    keyboardType={"numeric"}
                    maxLength={10}
                />
                <View style={styles.picker}>
                    <Picker
                        selectedValue={gender}
                        onValueChange={setGender}
                        style={{ color: "orange" }}>
                        <Picker.Item label="Cinsiyet Seçiniz" enabled={false} />
                        <Picker.Item label="Erkek" value="Erkek" />
                        <Picker.Item label="Kadın" value="Kadın" />
                    </Picker>
                </View>
                <CustomTextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="E-posta Adresini Giriniz"
                />
                <CustomTextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Parolayı Giriniz"
                    secureTextEntry={true}
                />
                <CustomTextInput
                    value={passwordAgain}
                    onChangeText={setPasswordAgain}
                    placeholder="Parolayı Tekrar Giriniz"
                    secureTextEntry={true}
                />
                <View style={styles.buttonContainer}>
                    <CustomButton buttonTitle="Kayıt Oluştur" onPress={handleSignUpButton} />
                    <CustomButton buttonTitle="Geri Dön" onPress={handleBackButton} />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp;