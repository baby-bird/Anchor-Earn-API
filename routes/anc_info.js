const express = require('express'); //import express
const router  = express.Router(); 

const ANC_Controller = require('../controllers/anc_info'); 

router.get('/anc_info', ANC_Controller.getANC_INFO);
// router.post('/tea', teaController.newANC); 
// router.delete('/tea', teaController.deleteAllTea);

// router.get('/tea/:name', teaController.getOneTea);
// router.post('/tea/:name', teaController.newComment); 
// router.delete('/tea/:name', teaController.deleteOneTea);

module.exports = router; // export to use in server.js
