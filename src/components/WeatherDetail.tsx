import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { weatherImgs } from "../icons/icons.ts";
import { motion, AnimatePresence } from "framer-motion";
import ErrorMessage from "./ErrorMessage.tsx";
import Loader from "./Loader.tsx";
import WeatherTemperatureDetail from "./WeatherTemperatureDetail";
import WeatherUbicationDetail from "./WeatherUbicationDetail.tsx";
import WeatherOptionalData from "./WeatherOptionalData.tsx";
import { setFalseData } from "../app/features/weaherSlice/weatherSlice.ts";

const boxAnimation = {
  key: "box",
  initial: { y: "20%", opacity: 0, scale: 0.5 },
  animate: { y: 0, opacity: 1, scale: 1 },
  exit: { y: "100px", opacity: 0, transition: { duration: 0.2 }, scale: 0.1 },
  className: "bg-red-400 rounded-md p-4",
};

const WeatherDetail = () => {
  const weatherInfo = useAppSelector((state) => state.weather.weather);
  const errorMessage = useAppSelector((state) => state.weather.errorMessage);
  const loader = useAppSelector((state) => state.weather.loading);
  const dispatch = useAppDispatch();

  const handleSetFalseData = () => {
    console.log("aqui");
    dispatch(setFalseData());
  };

  return (
    <div className="p-4 relative w-full">
      {!loader && !errorMessage && !weatherInfo.name && (
        <div>
          <p className="text-green-300 text-md text-center">
            Search the weather that you want to know
          </p>
          <button
            className="p-1 bg-slate-50 rounded-md cursor-pointer z-10 absolute"
            onClick={() => handleSetFalseData()}
          >
            set false data
          </button>
        </div>
      )}
      <div>
        <div className="absolute w-full flex justify-center items-center left-0 h-full p-9">
          {loader && <Loader />}
        </div>
      </div>
      <AnimatePresence>
        {weatherInfo.name ? (
          <motion.div {...boxAnimation}>
            <div>
              <h1 className="font-bold text-5xl text-zinc-200 text-center">
                {weatherInfo.name}
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="h-24 w-24">
                <img
                  src={
                    weatherImgs[`${weatherInfo.weather[0].icon!}` || "unknown"]
                  }
                  alt={weatherInfo.name}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div>
              <WeatherTemperatureDetail
                generalTemp={weatherInfo.main.temp}
                maxTemp={weatherInfo.main.temp_max}
                minTemp={weatherInfo.main.temp_min}
                />
              <WeatherOptionalData
                pressure={weatherInfo.main.pressure}
                humidity={weatherInfo.main.humidity}
                />
              <WeatherUbicationDetail
                lat={weatherInfo.coord.lat}
                lon={weatherInfo.coord.lon}
                />
                </div>
            </div>
            <p className="text-right pr-1 py-2">Country Id: {weatherInfo.id}</p>
          </motion.div>
        ) : (
          <ErrorMessage message={errorMessage} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WeatherDetail;
