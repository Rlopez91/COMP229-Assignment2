import express from 'express';
const router = express.Router();

import { DisplayContactList, DisplayUpdateContact } from '../Controllers/contact-list';

import { AuthGuard } from '../Util';


router.get('/contact-list', AuthGuard, DisplayContactList);

//get route for displaying the update contact page
router.get('/update', DisplayUpdateContact);

//attempting processing the update contact page

export default router;