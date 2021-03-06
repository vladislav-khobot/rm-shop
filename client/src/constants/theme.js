import { ThemeUtils } from 'utils/ThemeUtils';

const colors = {
  // named
  backgroud: '#E5E5E5',

  mainWhite: '#FFFFFF',
  mainBlack: '#333333',
  mainGrey: '#BDBDBD',
  mainGreen: '#27AE60',
  mainYellow: '#F2C94C',
  mainRed: '#EB5757',
  mainBlue: '#2F80ED',

  secondWhite: '#F5F5F5',
  secondBlack: '#656565',
  secondGrey: '#DFDFDF',
  secondGreen: '#6FCF97',
  secondYellow: '#FFE081',
  secondRed: '#ED7F7F',
  secondBlue: '#67B1DB',
};

const colorsMatching = {
  'black': colors.mainBlack,
  'white': colors.mainWhite,
  'grey': colors.mainGrey,
  'green': colors.mainGreen,
  'yellow': colors.mainYellow,
  'red': colors.mainRed,
  'blue': colors.mainBlue,
};

export const THEME = {
  colors: {
    ...colors,
  },
  colorsMatching: {
    ...colorsMatching,
  },
  text: {
    main: colors.mainBlack,
    second: colors.secondBlack,
    head: colors.mainWhite,
    button: {
      default: colors.mainBlack,
      primary: colors.mainWhite,
    },
    warning: colors.mainRed,
    basketNotes: colors.mainGrey,
    input: colors.secondBlack,
  },
  bg: {
    main: colors.mainWhite,
    header: colors.mainBlack,
    button: {
      default: colors.mainWhite,
      primary: colors.mainBlue,
    },
    shirtCard: colors.mainWhite,
    input: colors.mainWhite,
  },
  border: {
    button: {
      default: colors.mainGrey,
      primary: colors.mainBlue,
    },
    input: colors.mainGrey,
    shirtCard: colors.mainGrey,
  },
};
