import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./store";

import Login from "./src/screens/Login/Login";
import SignUp from "./src/screens/SignUp/SignUp";
import TicketQuery from "./src/screens/ticketQuery/TicketQuery";
import TripList from "./src/screens/tripList/TripList";
import TripDetails from "./src/screens/tripDetails/TripDetails";
import Payment from "./src/screens/payment/Payment";
import Achievement from "./src/screens/achievement/Achievement";

const App = () => {

  const headerStyle = {
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleAlign: 'center',
    headerTintColor: 'orange',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={headerStyle}/*screenOptions={{ headerShown: false }}*/>
          <Stack.Screen name="Giriş" component={Login} />
          <Stack.Screen name="Kayıt" component={SignUp} />
          <Stack.Screen name="Bilet Sorgulama" component={TicketQuery} />
          <Stack.Screen name="Sefer Listesi" component={TripList} />
          <Stack.Screen name="Sefer Detayları" component={TripDetails} />
          <Stack.Screen name="Ödeme" component={Payment} />
          <Stack.Screen name="Başarım" component={Achievement} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;