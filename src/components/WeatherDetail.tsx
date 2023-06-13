import { useAppSelector } from "../hooks/reduxHooks";
import { weatherImgs } from "../icons/icons.ts";
import ErrorMessage from "./ErrorMessage.tsx";
import Loader from "./Loader.tsx";
import { useState } from 'react';

const WeatherDetail = () => {
  const weatherInfo = useAppSelector((state) => state.weather.weather);
  const errorMessage = useAppSelector((state) => state.weather.errorMessage);
  const loader = useAppSelector((state) => state.weather.loading);

  const [number, setNumber] = useState<number>(0);

  return (
    <div className="p-4">
      {!loader && !errorMessage && !weatherInfo.name && <p className="text-green-300 text-2xl">Nothing here yet...</p>}
      <div 
      // className="flex justify-end items-center"
      >
        {loader && <Loader />}
      </div>
      {weatherInfo.name ? (
        <div>
          <h1 className="font-bold text-3xl text-zinc-200">
            {weatherInfo.name}
          </h1>
          <p>Presure: {weatherInfo.main.pressure}</p>
          <p>Humidity: {weatherInfo.main.humidity}</p>
          <p>General Temperature: {weatherInfo.main.temp}</p>
          <p>Time zone: {weatherInfo.timezone}</p>
          <p>Max. Temperature: {weatherInfo.main.temp_max}</p>
          <p>Min. Temperature: {weatherInfo.main.temp_min}</p>
          <p>Lat: {weatherInfo.coord.lat}</p>
          <p>Country Id: {weatherInfo.id}</p>
          <p>Lon: {weatherInfo.coord.lon}</p>
          <div className="h-20 w-20">
            <img
              src={weatherImgs[`${weatherInfo.weather[0].icon!}` || "unknown"]}
              alt={weatherInfo.name}
              className="w-full"
            />
          </div>
        </div>
      ) : (
        <ErrorMessage message={errorMessage} />
      )}
    </div>
  );
};

export default WeatherDetail;
