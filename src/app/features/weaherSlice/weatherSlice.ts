import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { WeatherInterface } from "./weatherInterfaces";

interface WeatherSliceInterface {
  loading: boolean;
  weather: WeatherInterface;
  errorMessage: string;
}

const initialState: WeatherSliceInterface = {
  loading: false,
  weather: {
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: [],
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
      sea_level: 0,
      grnd_level: 0,
      feels_like: 0,
    },
    visibility: 0,
    timezone: 0,
    id: 0,
    name: "",
    cod: 0,
  },
  errorMessage: "",
};

export const weatherSlice = createSlice({
  initialState: initialState,
  name: "weather",
  reducers: {
    loadingApiRequest(state) {
      state.errorMessage = "";
      state.weather = initialState.weather;
      state.loading = true;
    },
    setWeather(state, { payload }: PayloadAction<WeatherInterface>) {
      state.errorMessage = "";

      if (payload.name) {
        state.loading = false;

        state.weather.coord = payload.coord;
        state.weather.weather = payload.weather;
        state.weather.main = payload.main;
        state.weather.visibility = payload.visibility;
        state.weather.id = payload.id;
        state.weather.name = payload.name;
        state.weather.cod = payload.cod;
      }
    },
    errorHandlerWeather(state, { payload }: PayloadAction<string>) {
      state.loading = false;
      state.weather = initialState.weather;
      state.errorMessage = payload;
    },

    setFalseData(state) {
      state.weather = {
        coord: {
          lon: 1321,
          lat: 1321,
        },
        weather: [
         { icon: "unknown", id: 12321, main: "", description: "" }
        ],
        main: {
          temp: 12312,
          temp_min: 1321,
          temp_max: 1231,
          pressure: 32131,
          humidity: 312123,
          sea_level: 123123,
          grnd_level: 3123,
          feels_like: 31231,
        },
        visibility: 32131,
        timezone: 321321,
        id: 312312,
        name: "Michael",
        cod: 3213,
      };
    },
  },
});

export const {
  setWeather,
  loadingApiRequest,
  errorHandlerWeather,
  setFalseData,
} = weatherSlice.actions;

export default weatherSlice.reducer;
