import Form from "./Form";

const Header = () => {
  return (
    <header className="w-full bg-cyan-700 py-3 px-10 flex items-center justify-between fixed top-0 sm:flex-row md: flex-col">
      <p className="text-2xl text-white font-thin mb-1 inline-block">
        WeatherApp
      </p>
      <Form />
    </header>
  );
};

export default Header;
