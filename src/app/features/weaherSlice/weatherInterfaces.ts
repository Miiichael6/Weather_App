export interface WeatherInterface {
  coord:      Coord;
  weather:    WeatherElement[];
  main:       Main;
  visibility: number;
  timezone:   number;
  id:         number;
  name:       string;
  cod:        number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
  sea_level:  number;
  grnd_level: number;
}

export interface WeatherElement {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}
