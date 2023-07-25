const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const menuSchema = new Schema({
  dinnerMenu: [dinnerMenuSchema],
  lunchMenu: [lunchMenuSchema],
  dessertsMenu: [dessertsMenuSchema],
});

const Menu = mongoose.model("Menu", menuSchema);
const DinnerItem = mongoose.model("DinnerItem", dinnerMenuSchema);
const LunchItem = mongoose.model("LunchItem", lunchMenuSchema);
const DessertItem = mongoose.model("DessertsItem", dessertsMenuSchema);

module.exports = Menu;
module.exports = DinnerItem;
module.exports = LunchItem;
module.exports = DessertItem;
