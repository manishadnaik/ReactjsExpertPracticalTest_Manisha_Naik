const express = require('express');
const app = express();
const port = 9000;
const path = require('path');

app.use('/pictures', express.static(path.join(__dirname, '/images/movies/')));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
