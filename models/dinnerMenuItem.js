const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dinnerMenuSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DinnerItem = mongoose.model('DinnerItem', dinnerMenuSchema);

module.exports = DinnerItem;
