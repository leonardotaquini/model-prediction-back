import { Router } from "express";
import { predict, train } from "../controllers/model.controller.js";



const router = Router();


router.get('/train', train);

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to model prediction' });
});

router.post('/predict', predict);

export default router;