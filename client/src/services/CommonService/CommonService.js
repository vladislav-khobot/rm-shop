/* eslint-disable no-console */
import axios from 'axios';

import { COLORS_URL, SIZES_URL, CHARACTERS_URL, GALLERY_URL } from 'constants/requestUrls';
import { THEME } from 'constants/theme';

class CommonService {

  static async getColors() {
    try {
      const res = await axios.get(COLORS_URL);

      return res.data.map(item => {
        const currentColor = item.color;
        const themeColor = THEME.colorsMatching[currentColor];

        return themeColor || '';
      });
    } catch (error) {
      console.log(error);
    }

    return [];
  }

  static async getSizes() {
    try {
      const res = await axios.get(SIZES_URL);

      return res.data.map(item => {
        return item.size;
      });
    } catch (error) {
      console.log(error);
    }

    return [];
  }

  static async getCharacters() {
    try {
      const res = await axios.get(CHARACTERS_URL);

      return res.data.map(item => {
        return {
          name: item.name,
          image: item.image,
          basePrice: item.basePrice,
        };
      });
    } catch (error) {
      console.log(error);
    }

    return [];
  }

  static async getGallery() {
    try {
      const res = await axios.get(GALLERY_URL);

      return res.data.map(item => {
        return {
          ...item,
        };
      });
    } catch (error) {
      console.log(error);
    }

    return [];
  }
}

export { CommonService };
