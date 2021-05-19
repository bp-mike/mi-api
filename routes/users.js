import express from 'express';
import {getUsers, creatUser, getUserById, deleteUser, updateUser } from '../controllers/usersControllers.js' 


const router = express.Router()


router.get('/', getUsers)

router.post('/', creatUser)

router.get('/:id', getUserById)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router
