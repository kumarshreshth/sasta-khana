import React from 'react';
import { useState } from 'react';
import { fetchRestaurant } from '../api';

const LocationSearch = ({
  isError,
  setError,
  errorValue,
  setErrorValue,
  isSuccess,
  setIsSuccess,
  data,
  setData,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const Search = async () => {
    if (searchValue.trim() == '') {
      alert('Please enter location to search');
      return;
    }
    try {
      const response = await fetchRestaurant(searchValue);
      setIsSuccess(true);
      //console.log(response);
      setData(response);
      setError(false);
    } catch (error) {
      setErrorValue(error);
      setError(true);
    }
  };

  return (
    <div className="bg-black rounded-xl opacity-90">
      <div className="flex items-center space-x-6 m-3 p-5">
        <div className="text-white text-3xl">
          <i className="fa fa-map-marker"></i>
        </div>
        <div className="text-white text-2xl">
          <input
            type="text"
            placeholder="Search your location here"
            className="outline-none"
            value={searchValue}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <button
            className="text-white text-xl bg-green-800 m-2 p-4 rounded-xl hover:bg-white hover:text-black cursor-pointer"
            onClick={Search}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationSearch;
