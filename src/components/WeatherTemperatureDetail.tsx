type Props = {
  generalTemp: number;
  maxTemp: number;
  minTemp: number;
};

const WeatherTemperatureDetail = ({ generalTemp, maxTemp, minTemp }: Props) => {
  return (
    <div className="p-1">
      <div>
      <p className="font-medium text-xl">Temperatures</p>
      <p>
        <span className="italic font-medium">General Temperature: </span>
        {generalTemp}º
      </p>
      <p>
        <span className="italic font-medium">Max. Temperature:</span> {maxTemp}º
      </p>
      <p>
        <span className="italic font-medium">Min. Temperature:</span> {minTemp}º
      </p>
      </div>
    </div>
  );
};

export default WeatherTemperatureDetail;
