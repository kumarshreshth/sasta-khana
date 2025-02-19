import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Location = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const Search = async () => {
    try {
      const response = await axios.post('http://localhost:5000/search', {
        searchValue,
      });
      console.log('Resopnse from backend: ', response.data);
    } catch (error) {
      console.log('Error from the backend: ', error);
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

export default Location;
