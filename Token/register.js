const express = require('express');
const userModel = requir('../Schema/studentSchema');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const auth = require('../Middleware/auth');
const userRouter = express.Router();

userRouter.post('/register', async(req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashPass = await bcrypt.hash(password, 10);
        const val = await new userModel({ name, email, password: hashPass, role })
        await val.save();
        res.send(val)
    } catch (err) {
        res.send({ msg: err.message })
    }
})