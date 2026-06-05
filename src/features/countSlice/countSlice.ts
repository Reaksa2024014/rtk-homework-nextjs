
import { createSlice } from "@reduxjs/toolkit";


const initializeValue = {
    value: 0
}


//create countSlice
export const countSlice = createSlice({
    name:'count',
    initialState: initializeValue,
    reducers:{
        increment: (state, action) =>{
            const incrementValue = action.payload;
            //update state when increment value has action from payload
            const value =  incrementValue !== undefined?
action.payload : 1;

            state.value += value;
        },
        decrement: (state, action) =>{
            const decrementValue = action.payload;
            state.value -= decrementValue;
        },
        resetValue: (state) => {
            state.value = 0;
        }

    }
})


export const {
    increment,
    decrement,
    resetValue
} = countSlice.actions;


export default countSlice.reducer;