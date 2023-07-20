import React, { useState } from "react";
import { View, ToastAndroid } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/button/Button";
import CustomTextInput from "../../components/textInput/TextInput";
import { useSelector } from "react-redux";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSecurity, setLoginSecurity] = useState(true);
    const [entryColor, setEntryColor] = useState(styles.correctEntry)

    const userEmail = useSelector(state => state.userEmail)
    const userPassword = useSelector(state => state.userPassword)

    const navigation = useNavigation();

    function handleSignUpButton() {
        navigation.navigate("Kayıt")
    }

    function handleLoginButton() {
        if (loginSecurity) {
            ToastAndroid.show("İlk Giriş Deneme Uyarısı", ToastAndroid.TOP)
            setLoginSecurity(false);
            setEntryColor(styles.wrongEntry)
        }
        else {
            if (email == "" || password == "") {
                ToastAndroid.show("Lütfen Tüm Alanları Doldurun", ToastAndroid.TOP)
            }
            else if (email != userEmail || password != userPassword) {
                ToastAndroid.show("Kullanıcı Bulunmamaktadır!", ToastAndroid.TOP)
            }
            else {
                setEntryColor(styles.correctEntry)
                navigation.navigate("Bilet Sorgulama");
            }
        }
    }

    return (
        <View style={styles.container}>
            <CustomTextInput value={email} onChangeText={setEmail} placeholder="E-posta Giriniz" selectedStyle={entryColor} />
            <CustomTextInput value={password} onChangeText={setPassword} placeholder="Parola Giriniz" secureTextEntry={true} />
            <View style={styles.buttonContainer}>
                <CustomButton buttonTitle="Giriş Yap" onPress={handleLoginButton} />
                <CustomButton buttonTitle="Kayıt Ol" onPress={handleSignUpButton} />
            </View>
        </View>
    )
}

export default Login;