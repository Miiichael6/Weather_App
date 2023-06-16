
type Props = {
  lat: number,
  lon: number
}

const WeatherUbicationDetail = ({lat,lon}: Props) => {
  return (
    <div className="p-1">
      <div>
    <p className="font-medium text-xl">Location: </p>
    <p>
      <span className="italic font-medium">Lat: </span>
      {lat}
    </p>
    <p>
      <span className="italic font-medium">Lon: </span>
      {lon}
    </p>
      </div>
  </div>
  )
}

export default WeatherUbicationDetail