import { Router } from 'express';
import { getUsers, createUser, deleteUser, editUser } from '../controllers/UserControllers.js';

const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', editUser);

export default router;