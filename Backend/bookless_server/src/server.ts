import express from "express";
import { Client, DataType }  from "ts-postgres";
import jwt, { verify } from "jsonwebtoken";
import bycrypt from "bcryptjs";
import { UserRepository } from "./services/UserService";





const app = express();


app.get('/api', function(req, res) {
    res.json({
        text: 'my api'
    });
});


app.post('/api/posts', verifyToken, (req:any, res:any) => {  
    jwt.verify(req.token, 'secretkey', (err:any, authData:any) => {
      if(err) {
        res.sendStatus(403);
      } else {
        res.json({
          message: 'Post created...',
          authData
        });
      }
    });
  });

 
  app.post('/api/login', async (req, res) => {
    const userRepo: UserRepository = new UserRepository();
    try {
      const salt = (await bycrypt.genSalt()).toString();
      const hashedPassword = await bycrypt.hash(req.body.password, salt)
      console.log(salt);
      console.log(hashedPassword);
    }

    finally{
      userRepo.getAllUsers();
      jwt.sign(userRepo.users, 'secretkey', { expiresIn: '30s' }, (err, token) => {
          if(err){
              res.sendStatus(403);
          }
        res.json({
          token
        });
      });
    }
  });
// Format Of Token
// Authorization: Bearer <access_token> 

function verifyToken(req:any, res:any, next:any) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403); 
    }
  }

app.listen(3000, () => {
//    main();
    console.log('Running on Port 3000 . . .');
});
