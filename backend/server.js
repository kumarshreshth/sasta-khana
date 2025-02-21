const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const api_key = process.env.API_KEY;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.json());

// Function to call Swiggy API and return restaurant data
async function callToSwiggy(longitude, latitude) {
  try {
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`;

    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
      },
    });

    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

    const data = await res.json();
    return collectData(data);
  } catch (err) {
    throw err;
  }
}

// Function to process restaurant data
function collectData(dataObject) {
  const responseData = [];
  const listData =
    dataObject.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

  listData.forEach((dataComponent) => {
    const {
      id,
      name,
      locality,
      areaName,
      costForTwo,
      cuisines,
      avgRating,
      sla,
      restaurantOfferPresentationInfo,
      aggregatedDiscountInfoV3,
      isOpen,
    } = dataComponent.info;

    responseData.push({
      id,
      name,
      locality,
      areaName,
      cost: costForTwo,
      cuisines,
      rating: avgRating,
      time: sla,
      restaurantOffer: restaurantOfferPresentationInfo,
      discount: aggregatedDiscountInfoV3,
      open: isOpen,
    });
  });

  return responseData;
}

//Route to search restaurants based on location
app.post('/searchRestaurant', async (req, res) => {
  const { searchValue } = req.body;

  if (!searchValue) {
    return res.status(400).json({ message: 'Empty location value' });
  }

  try {
    const options = {
      method: 'GET',
      url: `https://us1.locationiq.com/v1/search?q=${encodeURIComponent(
        searchValue
      )}&key=${api_key}&format=json&limit=1`,
      headers: { accept: 'application/json' },
    };

    const response = await axios.request(options);
    const latitude = response.data[0]?.lat;
    const longitude = response.data[0]?.lon;

    if (!latitude || !longitude) {
      return res.status(400).json({ message: 'Invalid location data' });
    }

    const dataObject = await callToSwiggy(longitude, latitude);

    // console.log('Final Data Sent:', dataObject);
    return res.json(dataObject);
  } catch (err) {
    return res.status(500).json({ message: 'Location service error' });
  }
});

// app.post('/search', (req, res) => {
//   return res.status(500).json({ message: 'Error from backend' });
// });

app.listen(5000, () => {
  console.log('Server running at Port 5000');
});
