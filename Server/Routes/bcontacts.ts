import express from 'express';
const router = express.Router();

import { DisplayContactList } from '../Controllers/contact-list';

import { AuthGuard } from '../Util';


router.get('/contact-list', AuthGuard, DisplayContactList);

export default router;