const { RESTDataSource } = require('apollo-datasource-rest');
const path = require('path');
const fs = require('fs');

class MoviesAPI extends RESTDataSource {
  constructor() {
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'http://localhost:9000';
  }

  async getMovie(id) {
    const directoryPath = path.join(__dirname, `../images/movies/movie-${id}`);
    const filenames = fs.readdirSync(directoryPath);

    return JSON.stringify({
      baseUrl: `${this.baseURL}/pictures/movie-${id}/`,
      filenames,
    });
  }
}

module.exports = MoviesAPI;
