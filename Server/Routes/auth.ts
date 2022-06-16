import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayRegisterPage, ProcessLogoutPage, DisplayLoginPage, ProcessLoginPage, ProcessRegisterPage} from "../Controllers/auth";

/* Display login. */
router.get('/login', DisplayLoginPage);

/* Display register. */
router.get('/register', DisplayRegisterPage);

/* process login. */
router.post('/login', ProcessLoginPage);

/* process register. */
router.post('/register', ProcessRegisterPage);

/* Process logout. */
router.get('/logout', ProcessLogoutPage);

/* TEMPORARY SECTION */


export default router;