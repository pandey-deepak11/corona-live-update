import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  filteredCountries: [],
  global: {},
};

const countrySlice = createSlice({
  name: "Countries",
  initialState,
  reducers: {
    addCountry(state, action) {
      if (action.payload.length === 0) {
        return;
      }
      state.countries = [...action.payload];
    },

    searchCountry(state, action) {
      const searchedCountry =
        action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
      state.filteredCountries = state.countries.filter((country) =>
        country.Country.startsWith(searchedCountry)
      );
    },
    reponse(state, action) {
      state.global = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: countrySlice.reducer,
});

export const countryActions = countrySlice.actions;
