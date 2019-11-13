import express = require('express');
import * as FirstController from "../controller/FirstController"
import * as SecondController from "../controller/SecondController"
const router = express.Router();

/* GET home page. */
router.get('/first/A', FirstController.MyHttpHandlerA);
router.get('/first/B', FirstController.MyHttpHandlerB);

router.get('/second/C', SecondController.MyHttpHandlerC);
router.get('/second/D', SecondController.MyHttpHandlerC);

export default router;