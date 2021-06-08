/* eslint-disable no-console */
import axios from 'axios';

import { API_ROUTES } from 'constants/api';

class CommonService {

  static async getColors() {
    try {
      const res = await axios.get(API_ROUTES.colors);

      return res.data;
    } catch (error) {
      console.log(error);
    }

    return [];
  }

  static async getSizes() {
    try {
      const res = await axios.get(API_ROUTES.sizes);

      return res.data;
    } catch (error) {
      console.log(error);
    }

    return [];
  }

  static async getCharacters() {
    try {
      const res = await axios.get(API_ROUTES.characters);

      return res.data;
    } catch (error) {
      console.log(error);
    }

    return [];
  }

  static async getGallery() {
    try {
      const res = await axios.get(API_ROUTES.gallery);

      return res.data;
    } catch (error) {
      console.log(error);
    }

    return [];
  }
}

export { CommonService };
