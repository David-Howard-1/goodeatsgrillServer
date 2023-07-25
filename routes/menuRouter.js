const express = require("express");
const menuRouter = express.Router();

const Menu = require("../models/menu");
const DinnerItem = require("../models/menu");
const LunchItem = require("../models/menu");
const DessertItem = require("../models/menu");

menuRouter
  .route("/")
  .get((req, res, next) => {
    Menu.find()
      .then((menu) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(menu);
      })
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    Menu.deleteMany()
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });

menuRouter
  .route("/dinner-menu")
  .get((res, req, next) => {
    DinnerItem.find()
      .then((dinneritems) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(dinneritems);
      })
      .catch((err) => next(err));
  })
  .post((res, req, next) => {
    DinnerItem.create(req.body)
      .then((dinneritem) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(dinneritem);
      })
      .catch((err) => next(err));
  })
  .put((res, req) => {
    res.statusCode = 403;
    res.end("PUT operation not supported");
  });
