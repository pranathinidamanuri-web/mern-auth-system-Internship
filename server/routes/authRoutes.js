const express = require("express");
const router = express.Router();

console.log("AUTH ROUTES WORKING");


//import All functions 

const { registerUser, loginUser, getUsers, updateUser, deleteUser, refreshTokenUser, logoutUser } = require("../controllers/authController");// for register and login // public routes

//import middleware 
const protect = require("../middleware/authMiddleware")

//public routes

router.post("/register", registerUser);  // register user 
router.post("/login", loginUser);   //login user 

//protected route
router.get("/users", protect, getUsers); 


// update user
router.put("/users/:id", protect, updateUser);

// delete user 
router.delete("/delete", protect, deleteUser); 

// refresh-token 
router.post("/refresh-token", refreshTokenUser);


//logout-user 
router.post("/logout", protect, logoutUser);

module.exports = router;