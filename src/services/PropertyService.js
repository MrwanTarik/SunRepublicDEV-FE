import axios from 'axios';

import { API_URL } from '../constants/main';

const PropertyService = {
  async getPropertyList({
    recent,
    bedrooms,
    bathrooms,
    minPrice,
    maxPrice,
    minArea,
    maxArea,
    hasPool,
    type,
    region,
    floorCount,
    action,
    searchTerm,
    ppid,
  }) {
    const response = await axios.get(`${API_URL}/property`, {
      params: {
        recent,
        bedrooms,
        bathrooms,
        minPrice,
        maxPrice,
        minArea,
        maxArea,
        hasPool,
        type,
        region,
        floorCount,
        action,
        searchTerm,
        ppid,
      },
    });
    return response.data;
  },

  async getSingleProperty(id) {
    const response = await axios.get(`${API_URL}/property/${id}`);
    return response.data;
  },
};

export default PropertyService;
