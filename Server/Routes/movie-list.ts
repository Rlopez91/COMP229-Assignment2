import express from 'express';
const router = express.Router();

import { DisplayMovieList } from '../Controllers/movie-list';

import { AuthGuard } from '../Util';


router.get('/movie-list', AuthGuard, DisplayMovieList);

export default router;