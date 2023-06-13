import { useState } from "react";
import { getWeatherApi } from "../app/features/weaherSlice/weatherThunks";
import { useAppDispatch } from "../hooks/reduxHooks";

const Form = () => {
  const [country, setCountry] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setCountry(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getWeatherApi(country));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
      <input 
        type="text" 
        value={country}  
        onChange={handleChange}
        className="rounded-md outline-none py-1 px-2" 
        placeholder="Search a weather..."
        />
        <button
          onClick={() => {}}
          className="py-1 px-2 bg-cyan-900 text-white rounded-lg ml-1 inline-block"
          >
           Search
        </button>
      </div>
    </form>
  );
};

export default Form;
