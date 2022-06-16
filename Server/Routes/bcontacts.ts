import express from 'express';
const router = express.Router();

import { DisplayContactList } from '../Controllers/contact-list';

import { AuthGuard } from '../Util';


router.get('/movie-list', AuthGuard, DisplayContactList);

export default router;