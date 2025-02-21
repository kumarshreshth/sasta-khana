import React from 'react';
import { useState } from 'react';
import { fetchDetails } from '../api';

const LocationSearch = ({ isError, setError, errorValue, setErrorValue }) => {
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
      const response = await fetchDetails(searchValue);
      console.log(response);
      setError(false);
    } catch (error) {
      setErrorValue(error);
      setError(true);
    }
  };

  return (
    <div className="bg-black opacity-80 rounded-xl">
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
