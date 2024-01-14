import {signup,login,verifyToken,getUSer} from '../controller/signupcontroller.js';
import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.js';


const router = express.Router();

// const authenticateToken=(req,res,next)=>{
//     const authHeader=req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1];
//     if(token == null) return res.sendStatus(401)

//     jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
//         if(err){
//             console.log(err)
//             return res.sendStatus(403)
//         }
//         req.user=user
//         next()
//     })
// }

// router.post('/signup', signup);
// router.post('/login', login);
// router.get('/', getUser);

router.post('/signup', signup);
router.post("/login",login);
router.get("/user",verifyToken,getUSer)

export default router;
