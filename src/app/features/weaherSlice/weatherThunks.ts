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
      const customMessage = `Sorry, but Country or City with name "${country}" does not exist, try another, please.`;

      console.log(error)

      if(errorCode === 404){
        dispatch(errorHandlerWeather(customMessage));
      }
    }
  }
}
