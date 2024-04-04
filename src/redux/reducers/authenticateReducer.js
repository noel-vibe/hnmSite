import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


let initialState = {
  id: '',
  password: '',
  authenticate: false,
};

const authenticateSlice= createSlice({
  name:"detail",
  initialState,
  reducers:{
    loginSuccess(state,action){
        state.id= action.payload.id;
        state.password= action.payload.password;
        state.authenticate= true;
    }
  }
})

console.log("authenticateSlice",authenticateSlice)

export const authenticateActions = authenticateSlice.actions;
export default authenticateSlice.reducer

// function authenticateReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "LOGIN_SUCCESS":
//       console.log("login success reducer");
//       return {
//         ...state,
//         id: payload.id,
//         password: payload.password,
//         authenticate: true,
//       };
//     default:
//       return { ...state };
//   }
// }

// export default authenticateReducer;
