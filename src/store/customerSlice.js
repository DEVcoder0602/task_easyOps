import { createSlice } from "@reduxjs/toolkit";

function generateUniqueId() {
    const timestamp = new Date().getTime(); // Current timestamp in milliseconds
    const randomNum = Math.floor(Math.random() * 10000000); // Random number between 0 and 9999
    const uniqueId = `${timestamp - randomNum}`;
    return uniqueId;
  }

const initialState = {
  customer: {
    id:"",
    name: "",
    email: "",
    phone: "",
    gender: "male",
    age: "",
  },
};

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers:{
        addCustomer: (state, action) => {
            const id = generateUniqueId();
            action.payload.id = id;
            state.customer = action.payload;
        }
    }
})

export const { addCustomer } = customerSlice.actions;
export default customerSlice.reducer;