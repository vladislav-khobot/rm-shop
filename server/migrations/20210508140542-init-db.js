const initColors = [
  { color: 'black', weight: 2 },
  { color: 'white', weight: 1 },
  { color: 'blue', weight: 1 },
  { color: 'red', weight: 2 },
  { color: 'green', weight: 1 },
  { color: 'yellow', weight: 2 },
];

const initSizes = [
  { size: 'S', weight: 1 },
  { size: 'M', weight: 1 },
  { size: 'L', weight: 2 },
  { size: 'XL', weight: 2 },
  { size: 'XXL', weight: 3 },
];

const url = 'https://rickandmortyapi.com/api/character/avatar';
const initCharacters = [
  { name: 'Rick Sanchez', image: `${url}/1.jpeg`, basePrice: 39.99 },
  { name: 'Morty Smith', image: `${url}/2.jpeg`, basePrice: 36.99 },
  { name: 'Abradolf Lincler', image: `${url}/7.jpeg`, basePrice: 37.99 },
  { name: 'Albert Einstein', image: `${url}/11.jpeg`, basePrice: 39.99 },
  { name: 'Centaur', image: `${url}/63.jpeg`, basePrice: 35.99 },
  { name: 'Commander Rick', image: `${url}/69.jpeg`, basePrice: 39.99 },
  { name: 'Eli', image: `${url}/110.jpeg`, basePrice: 38.99 },
  { name: 'Father Bob', image: `${url}/124.jpeg`, basePrice: 36.99 },
  { name: 'Frankenstein', image: `${url}/128.jpeg`, basePrice: 39.99 },
  { name: 'Maximums Rickimus', image: `${url}/215.jpeg`, basePrice: 38.99 },
  { name: 'Orthodox Jew', image: `${url}/255.jpeg`, basePrice: 35.99 },
  { name: 'Snuffles (Snowball)', image: `${url}/329.jpeg`, basePrice: 38.99 },
  { name: 'Steve', image: `${url}/335.jpeg`, basePrice: 36.99 },
  { name: 'Supernova', image: `${url}/340.jpeg`, basePrice: 37.99 },
  { name: 'Tiny Rick', image: `${url}/353.jpeg`, basePrice: 36.99 },
  { name: 'Two Guys', image: `${url}/370.jpeg`, basePrice: 35.99 },
  { name: 'Vampire Master', image: `${url}/374.jpeg`, basePrice: 38.99 },
  { name: 'Worldender', image: `${url}/382.jpeg`, basePrice: 37.99 },
  { name: 'Alien Mexican Armada', image: `${url}/411.jpeg`, basePrice: 36.99 },
  { name: 'Vampire Master Assistant', image: `${url}/453.jpeg`, basePrice: 35.99 },
];

module.exports = {
  async up(db, client) {
    // colors
    await db.collection('colors').deleteMany({});
    await db.collection('colors').insertMany(initColors);

    // sizes
    await db.collection('sizes').deleteMany({});
    await db.collection('sizes').insertMany(initSizes);

    // characters
    await db.collection('characters').deleteMany({});
    await db.collection('characters').insertMany(initCharacters);
  },

  async down(db, client) {
    await db.collection('colors').deleteMany({});
    await db.collection('sizes').deleteMany({});
    await db.collection('characters').deleteMany({});
  }
};
