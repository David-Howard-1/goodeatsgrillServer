const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
      min: 1,
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
    },
  },
  {
    timestamps: true,
  }
);

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
