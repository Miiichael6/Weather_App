import Header from "../../components/Header";
import WeatherDetail from "../../components/WeatherDetail";

export const Home = () => {

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="min-h-screen flex justify-center items-center p-2">
      <div 
        className="w-full max-w-600px flex min-h-550px rounded-md justify-center items-center mt-10">
          <WeatherDetail />
      </div>
      </div>
    </div>
  );
};
