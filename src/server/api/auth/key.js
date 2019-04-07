import express from 'express';
import Encryption from '../../encryption/Encryption';

const router = express.Router();

router.get('/public', (req, res) => {
    res.status(200).send(Encryption.getPublicKey());
});

export default router;