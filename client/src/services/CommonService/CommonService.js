/* eslint-disable no-console */
import axios from 'axios';

import { COLORS_URL, SIZES_URL, CHARACTERS_URL, GALLERY_URL } from 'constants/requestUrls';

class CommonService {

  static async getColors() {
    try {
      const res = await axios.get(COLORS_URL);
    } catch (error) {
      console.log(error);
    }

    return [];
  }

  static getSizes() {

  }

  static getCharacters() {

  }

  static getGallery() {

  }

}

export { CommonService };
