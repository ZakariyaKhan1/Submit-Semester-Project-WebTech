import bcrypt from 'bcryptjs';
import { user } from '../model/user.js';
import config from '../config.js';
import dotenv from 'dotenv'
import  Jwt  from 'jsonwebtoken';
const JWT_SECRET_KEY='Mykey';
import { person } from '../model/person.js';
 

const signup = async (req,res,next)=>{

  const {name,email,password}=req.body;
  let existingUser;

  try{
    existingUser=await person.findOne({email});
  } catch(err){
    console.log(err)
  }
  if(existingUser){
    return res.status(400)
    .json({message:"user already exists"})
  }

  const hashedPassword = bcrypt.hashSync(password); 
  const User=new person({
    name,
    email,
    password: hashedPassword,
  });

  try{
    await User.save();
  } catch(err){
    console.log(err)
  }

  return res.status(201).json({message: User});
};

const login = async (req,res,next)=>{

const {email,password} =req.body;

let existingUser;
try{
  existingUser = await user.findOne({email});
}catch(err){
  return new Error(err);
}
if(!existingUser){
  return res.status(400).json({message: "user not found. signup please"})
}
const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
if(!isPasswordCorrect){
  return res.status(400).json({message:"invalid email/password"})
}

const token = jwt.sign({id: existingUser._id},JWT_SECRET_KEY,{expiresIn: "1h" });

res.cookie(String(existingUser._id),token,{
  path: '/',
  expires: new Date(Date.now() + 1000*30),
  httpOnly: true,
  sameSite: 'lax'
})

return res.status(200).json({message:"successfully logged in",User:existingUser,token});
};

const verifyToken = (req,res,next) =>{

  const cookies=req.headers.cookie;
  const token=cookies.split("=")(1);
  console.log(token);
  if(!token){
    res.status(404).json({message:"no token found"});
  }
  jwt.verify(String(token),JWT_SECRET_KEY,(err,User)=>{
    if(err){
    return  res.status(400).json({message:"invalid token"})
    }

    console.log(User.id);
    req.id=User.id;
  });
  next();
};

const getUSer= async (req,res,nect)=>{
  const userId= req.id;
  let User;
  try{
    User=await user.findById(userId,".password");
  } catch(errr){
    return new Error(err)
  }
  if(!User){
    return res.status(404).json({message:"user not found"})
  }
  return res.status(200).json({User})


}

export {signup,login,verifyToken,getUSer};





























// const signup = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ email, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: 'Signup successful' });
//   } catch (err) {
//     res.status(500).json({ error: 'Error during signup' });
//   }
// };

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await user.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ error: 'Invalid email or password' });
//     }

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) {
//       return res.status(401).json({ error: 'Invalid email or password' });
//     }

//     const token = jwt.sign({ email: user.email }, 'secret_key');
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: 'Error during login' });
//   }
// };

// const getUser = async (req, res) => {
//   // The email should be extracted from the token payload provided by the authenticateToken middleware
//   const email = req.user.email;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Respond with the user's email or any other desired user details
//     res.json({ email: user.email });
//   } catch (err) {
//     res.status(500).json({ error: 'Error fetching user details' });
//   }
// };





// // const getUser = async (req, res) => {
// //   try {
// //     const users = await user.find();
// //     res.json(users);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Internal server error' });
// //   }
// // };

// // const signup = async (req, res) => {

// //   try {
// //     // Extract username, email, and password from the request body
// //     const {  email, password} = req.body;
// //     console.log(req.body);

// //     // Create a new user instance
// //     const newUser = new user({  email, password });

// //     // Save the user to the database
// //     const savedUser = await newUser.save();

// //     res
// //       .status(201)
// //       .json({ message: "User registered successfully", User: savedUser });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }

  
// // };


// // const login = async (req, res) => {
// //   try {
// //     const username = req.body.email;
// //     const user = await User.findOne({username})
// //     if (user) {
// //       const accessToken=jwt.sign({...user._doc},process.env.ACCESS_TOKEN_SECRET)
      
// //       res.json({...user._doc,accessToken:accessToken});
// //     } else {
// //       res.json("Error");
// //     }
// //   } catch (e) {
// //     console.log(e);
// //   }
// // };


// // const login = async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const existingUser = await user.findOne({ email });
// //     if (!existingUser) {
// //       return res.status(401).json({ message: 'Authentication failed' });
// //     }

// //     const isPasswordValid = await bcrypt.compare(password, existingUser.password);
// //     if (!isPasswordValid) {
// //       return res.status(401).json({ message: 'Authentication failed' });
// //     }

   
// //     const token = generateToken(existingUser);

// //     res.json({ message: 'Login successful', token });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Internal server error' });
// //   }
// // };



// export { signup, login, getUser };
