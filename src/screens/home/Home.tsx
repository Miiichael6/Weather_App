import Header from "../../components/Header";
import WeatherDetail from "../../components/WeatherDetail";

export const Home = () => {

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="min-h-screen flex justify-center items-center">
      <div 
        className="w-2/3 bg-slate-500 flex min-h-550px rounded-md justify-center items-center">
          <WeatherDetail />
      </div>
      </div>
    </div>
  );
};
