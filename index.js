
const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

mongoose.connect(
mongoose.connect(process.env.MONGODB_URI)
  .then(
    () => console.log('Connected to MongoDB')
    , err => console.log('faild to connect :' + err)
)

const user = require('./routes/user.routes');
app.use('/api/user', user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
