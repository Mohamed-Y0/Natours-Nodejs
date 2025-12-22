const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log(`Running On Port: ${port}`);
});
