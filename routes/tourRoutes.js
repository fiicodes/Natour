const express = require('express');
const tourController = require('./../controllers/tourController');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
const router = express.Router();
router.param('id', (req, res, next, val) => {
  console.log(`Tour id is :${val}`);
  next();
});

router
  .route('/')
  .get(checkBody.tourController.getAllTours)
  .post(checkBody.tourController.createTour);
router
  .route('/:id')
  .patch(tourController.updateTour)
  .get(tourController.getTour)
  .delete(tourController.deleteTour);

module.exports = router;
