const express = require('express');
const app = express();
require('dotenv').config();

app.listen(process.env.SERVER_PORT, () => console.log(`Server running on http://localhost:${process.env.SERVER_PORT}/`));