const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    min: new Date(),
  },
  notes: {
    type: String,
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;