import express from "express";
import { Client, DataType }  from "ts-postgres";
import jwt from "jsonwebtoken";
import bycrypt, { hash } from "bcryptjs";
import { UserRepository } from "./services/UserService";
import { User } from "./models/Authorisation/User";
import * as bodyParser from 'body-parser';





const app = express();
const userRepo = new UserRepository();
app.use(bodyParser.json());
app.get('/api', (req, res) => {
  res.send(userRepo.users);
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

  app.post('/users', async (req:express.Request, res:express.Response) => {

    try {
      console.log("11")
      const salt = await bycrypt.genSalt(); // default 10
      const hashedPassword = await bycrypt.hash(req.body.password, salt);
      console.log(salt);
      console.log(hashedPassword);
      const user = new User(1, req.body.user, hashedPassword);
      userRepo.users.push(user);
      res.status(201).send();
    } catch {
      
      res.status(500).send();
    }
  });

 
  app.post('/api/login', async (req, res) => {
    const user = userRepo.users.find(u => u.username = req.body.user);
    if(user == null){
      return res.status(400).send('Can not find user');
    }

    try{
      if(await bycrypt.compare(req.body.password, user.password)){
        res.send('Success');
      } else {
        res.send('Not Allowed');
      }
    } catch {
      res.status(500).send();
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
