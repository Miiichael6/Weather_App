import { useAppSelector } from "../hooks/reduxHooks";
import { weatherImgs } from "../icons/icons.ts";
import Loader from "./Loader.tsx";

const WeatherDetail = () => {
  const weatherInfo = useAppSelector((state) => state.weather.weather);
  const errorMessage = useAppSelector(state => state.weather.errorMessage)
  const loader = useAppSelector(state => state.weather.loading);
  return (
    
    <div>
      {loader && <Loader />}
      {weatherInfo.name ? 
      <div>
      <p>{weatherInfo.name}</p>
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

      </div> : <div>
        <p className="font-bold text-gray-700">
          {errorMessage}
        </p>
      </div> }
    </div>
  );
};

export default WeatherDetail;
