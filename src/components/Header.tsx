import Form from "./Form";
import weather from "../assets/logo.png";

const Header = () => {
  return (
    <header className="w-full bg-cyan-700 py-3 px-10 flex items-center justify-between fixed top-0 sm:flex-row md: flex-col">
      <div className="flex items-center gap-2">
        <div className="w-12">
          <img src={weather} alt="weather-logo" />
        </div>
        <p className="text-2xl text-teal-50 font-thin mb-1 inline-block">
          WeatherApp
        </p>
      </div>
      <div className="py-1"></div>
      <Form />
    </header>
  );
};

export default Header;
