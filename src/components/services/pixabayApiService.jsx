import PropTypes from 'prop-types';

import axios from 'axios';

export const fetchPictures = async (searchQuery, page) => {
  try {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '29711161-732b17ef7029dbffa0827fda9';
    const options = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'false',
      per_page: 12,
      key: API_KEY,
      q: searchQuery,
      page: page,
    });

    const response = await axios.get(`${BASE_URL}?${options}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

fetchPictures.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
