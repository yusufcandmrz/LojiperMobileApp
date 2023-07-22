import { createStore } from 'redux';

const initialState = {
    userName: "",
    userSurname: "",
    userIdentifyNumber: "",
    userBirthDate: "",
    userGender: "Kadın",
    userEmail: "",
    userPassword: "",
    selectedSeats: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return { ...state, ...action.payload };
        case 'ADD_TO_SELECTEDSEATS':
            return { ...state, selectedSeats: [...state.selectedSeats, action.payload] };
        case 'REMOVE_FROM_SELECTEDSEATS':
            const seatNumberToRemove = action.payload;
            const updatedSeats = state.selectedSeats.filter(seat => seat.seatNumber !== seatNumberToRemove);
            return { ...state, selectedSeats: updatedSeats };
        default:
            return state;
    }
};

const store = createStore(userReducer);

export default store;