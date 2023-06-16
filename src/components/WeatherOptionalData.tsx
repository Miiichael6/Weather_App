

type Props = {
  pressure: number;
  humidity: number;
};

const WeatherOptionalData = ({ pressure, humidity }: Props) => {
  return (
    <div className="p-1">
      <div>
        <p className="font-medium text-xl">Generic Weather</p>
      <p>
        <span className="italic font-medium">Presure: </span>
        {pressure}
      </p>
      <p>
        <span className="italic font-medium">Humidity: </span>
        {humidity}
      </p>
      </div>
    </div>
  );
};

export default WeatherOptionalData;
