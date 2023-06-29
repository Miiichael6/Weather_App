type Props = {};

export const About = ({}: Props) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <div className="p-4">
          <h1 className="text-4xl">About Weather App</h1>
          <br />
          <p>
            WeatherApp is about a simple app to see Weathers of all <br />{" "}
            countries, cities, districts, etc, this app handler errors like
            <br />
            offline countries that not exist, also this app is using a public
            API. <br />
            this app was build with TypeScript , React-Router-Dom, tailwind,
            <br />
            framer-motion and redux/toolkit
          </p>
        </div>
      </div>
    </div>
  );
};
