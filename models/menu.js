const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  dinnerMenu: [dinnerMenuSchema],
  lunchMenu: [lunchMenuSchema],
  dessertsMenu: [dessertsMenuSchema],
});

const dinnerMenuSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
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

const lunchMenuSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
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

const dessertsMenuSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
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

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
