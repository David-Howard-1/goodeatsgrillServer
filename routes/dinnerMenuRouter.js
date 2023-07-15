const express = require('express');
const DinnerItem = require('../models/dinnerMenuItem');

const dinnerMenuRouter = express.Router();

dinnerMenuRouter
  .route('/')
  .get((req, res, next) => {
    DinnerItem.find()
      .then((dinnerItem) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dinnerItem);
      })
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    DinnerItem.create(req.body)
      .then((dinnerItem) => {
        console.log('Dinner item created ', dinnerItem);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dinnerItem);
      })
      .catch((err) => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
  })
  .delete((req, res, next) => {
    DinnerItem.deleteMany().then((response) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(response);
    })
    .catch((err) => next(err));
  });

module.exports = dinnerMenuRouter;
