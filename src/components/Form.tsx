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
      <input type="text" value={country} onChange={handleChange} className="" />
      <button
        onClick={() => {}}
        className="p-2 bg-cyan-900 text-white rounded-lg"
      >
        Search
      </button>
    </form>
  );
};

export default Form;
