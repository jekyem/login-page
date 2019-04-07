import express from 'express';

import login from './login';
import key from './key';

const router = express.Router();
router.use('/login', login);
router.use('/key', key);

export default router;