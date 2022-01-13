const express = require('express'); //import express
const router  = express.Router(); 

const ANC_Controller = require('../controllers/anc_info'); 

router.get('/anc_info', ANC_Controller.getANC_INFO);

module.exports = router; // export to use in server.js
