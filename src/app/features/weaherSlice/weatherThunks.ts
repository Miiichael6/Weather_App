import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"
import { errorHandlerWeather, loadingApiRequest, setWeather } from "./weatherSlice";

export const getWeatherApi = (country: string) => {
  return async (dispatch:Dispatch ) => {
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      dispatch(loadingApiRequest())
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`);

      const data = response.data;

      dispatch(setWeather(data))
      
    } catch (error: any) {
      // const errorData: string = error.response.data.message;
      const errorCode: number = error.response.status;
      const customMessage404 = `Sorry, but country or city with name "${country}" does not exist, try another, please.`;
      const customMessage400 = `You need to write a country or a city in the Search Bar...`;

      if(errorCode === 400) dispatch(errorHandlerWeather(customMessage400))

      if(errorCode === 404) dispatch(errorHandlerWeather(customMessage404));
      
    }
  }
}
