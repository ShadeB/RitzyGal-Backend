import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({
    message: 'Connected to index',
  });
  next();
});

export default router;
