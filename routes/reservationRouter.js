const express = require('express');
const reservationRouter = express.Router();

const Reservation = require('../models/reservation');

reservationRouter
  .route('/')
  .get((req, res, next) => {
    Reservation.find()
      .then((reservation) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(reservation);
      })
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Reservation.create(req.body)
      .then((reservation) => {
        console.log('Reservation created', reservation);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(reservation);
      })
      .catch((err) => next(err));
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /reservations');
  })
  .delete((req, res, next) => {
    Reservation.deleteMany()
      .then((response) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      })
      .catch((err) => next(err));
  });

reservationRouter
  .route('/:reservationId')
  .get((req, res, next) => {
    Reservation.findById(req.params.reservationId)
      .populate('comments.author')
      .then((reservation) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(reservation);
      })
      .catch((err) => next(err));
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /reservations/${req.params.reservationId}`
    );
  })
  .put((req, res, next) => {
    Reservation.findByIdAndUpdate(
      req.params.reservationId,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then((reservation) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(reservation);
      })
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    Reservation.findByIdAndDelete(req.params.reservationId)
      .then((response) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      })
      .catch((err) => next(err));
  });

module.exports = reservationRouter;
