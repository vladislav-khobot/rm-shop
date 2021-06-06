const envURL = process.env.REACT_APP_API_URL || '';
const originURL = `${window.location.origin}/api`;

const apiURL = envURL || originURL;

export const COLORS_URL = `${apiURL}/colors`;
export const SIZES_URL = `${apiURL}/sizes`;
export const CHARACTERS_URL = `${apiURL}/characters`;
export const GALLERY_URL = `${apiURL}/gallery`;
