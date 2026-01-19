const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 9090;
const server = app.listen(port, () => {
  console.log(`Running On Port: ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('Unhandled Rejection! - Shutting Down...');

  server.close(() => {
    process.exit(1);
  });
});
