import { configureStore, createSlice } from "@reduxjs/toolkit";

const beneficiariesSlice = createSlice({
  name: "beneficiaries",
  initialState: [],
  reducers: {
    addBeneficiary: (state, action) => {
      state.push(action.payload);
    },
    updateBeneficiary: (state, action) => {
      const index = state.findIndex(
        (beneficiary) => beneficiary.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeBeneficiary: (state, action) => {
      return state.filter(
        (beneficiary) => beneficiary.id !== action.payload.id
      );
    },
  },
});

export const { addBeneficiary, updateBeneficiary, removeBeneficiary } =
  beneficiariesSlice.actions;

const store = configureStore({
  reducer: {
    beneficiaries: beneficiariesSlice.reducer,
  },
});

export default store;
