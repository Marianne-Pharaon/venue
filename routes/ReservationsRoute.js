const express = require('express');
const router = express.Router();
 
const {
    getAllReservationByUserId , getAllReservationByEventId, getAllReservation
} = require('../controllers/ReservationsController');

router.get('/getByUserId/:id', getAllReservationByUserId);
router.get('/getByEventId/:id', getAllReservationByEventId);
router.get('/getAll', getAllReservation);



module.exports = router;