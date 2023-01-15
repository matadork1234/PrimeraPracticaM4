const express = require('express');
const { getUserById, updateUser, deleteUser, getAllUsers, registerUser } = require('../controllers/user.controller');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', registerUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;