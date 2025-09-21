import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import auth from '../middleware/auth'
import express from 'express'
import User from '../models/User'

const router = express.Router();

router.post('/register',async (req, res) => {
    const {username, password, email} = req.body;
    if(!username || !password || !email) {
        return res.status(401).send('all fields are required');
    }
    const usernameExists = await User.findOne({username})
    if (usernameExists) {
        return res.status(401).send('username already exists');
    }
    const emailExists = await User.findOne({email})
    if(emailExists) {
        return res.status(401).send('email already exists');
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            email: email,
            username: username,
            password: hashedPassword
        })
        await user.save()
    } catch (error) {
        return res.status(500).JSON({error : "Error registering a new user"});
    }
})

router.post('/login',async (req, res) => {
    try {
        const {username, password} = req.body;
        if (!username || !password) {
            return res.status(401).send('all fields are required');
        }
        const user = await User.findOne({username});
        if (!user || await !(bcrypt.compare(password, user.password))) {
            return res.status(401).send('credentials are incorrect');
        }
        const token = jwt.sign(
            {uuid: user.uuid, username: user.username},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        );
        return res.json({
            success: true,
            token: token,
            user: {uuid: user.uuid, email: user.email, username: user.username},
        });
    } catch (error) {
        console.error("Error loging in", error);
        return res.status(500).send('Something went wrong');
    }
});
router.post('/edit', auth,async (req, res) => {

})
router.post('/delete', auth,async (req, res) => {

})

export default router;