import jsonwebtoken from 'jsonwebtoken';

const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }

    try{
        req.user = await jsonwebtoken.verify(token, process.env.JWT_SECRET);
        next();
    } catch(error){
        res.status(401).send(error, { message: 'error occurred while trying to authenticate.' });
    }
}

export default auth;