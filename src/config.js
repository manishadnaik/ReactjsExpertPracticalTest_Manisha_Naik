const { config } = require('dotenv');
const path = require('path');
config({ path: path.resolve(__dirname, '.env') });

module.exports = {
  UI_URL: process.env.REACT_URL || 'http://localhost',
  UI_PORT: process.env.REACT_PORT || 3007,
};
