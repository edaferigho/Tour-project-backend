const mongoose = require('mongoose');


const DATABASE_URL = process.env.DATABASE_URL
function connectDB() {
    mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
    console.log(`Connection to ${db.name} was successful!`)
});
}
module.exports = connectDB