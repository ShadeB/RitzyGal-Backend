import { Router } from 'express';

const router = Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
  next();
});

export default router;
