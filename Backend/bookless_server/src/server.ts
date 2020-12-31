import express from "express";
import { Client, DataType }  from "ts-postgres";
import jwt from "jsonwebtoken";
import bycrypt, { hash } from "bcryptjs";
import { UserRepository } from "./services/UserRepo";
import { User } from "./models/Authorisation/User";
import * as bodyParser from 'body-parser';
import { stringify } from "querystring";

const app = express();
const userRepo = new UserRepository();
app.use(bodyParser.json()); 
app.get('/api', async (req, res) => {
  await userRepo.getAllUsers();
  console.log(userRepo.users)
  res.send(userRepo.users);
});

app.get('/api/testget', authenticateToken, (req:any, res:any) => {  
  res.json(userRepo.users);
});

  app.post('/users', async (req:express.Request, res:express.Response) => {

    try {
      console.log("11")
      const salt = await bycrypt.genSalt(); // default 10
      const hashedPassword = await bycrypt.hash(req.body.password, salt);
      console.log(salt);
      console.log(hashedPassword);
      const user = new User(1, req.body.username, hashedPassword);
      userRepo.addUser(user); 
      res.status(201).send();
    } catch {
      
      res.status(500).send();
    }
  });

 
  app.post('/api/login', async (req, res) => {
    const user = userRepo.users.find(u => u.username = req.body.username && u.id == req.body.id);
    if(user == null){
      return res.status(400).send('Can not find user');
    }

    try{
      if(await bycrypt.compare(req.body.password, user.password)){
        console.log(process.env.ACCESS_TOKEN_SECRET as string);
        const accessToken = jwt.sign({username: user.username, password:user.password}, process.env.ACCESS_TOKEN_SECRET as string, )
        res.json({accessToken : accessToken});


      } else {
        res.send('Not Allowed');
      }
    } catch {
      res.status(500).send();
    }
  });

function authenticateToken(req:any, res:any, next:any) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err:any, user:any) => {
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  });
}

app.listen(3000, () => {
  userRepo.getAllUsers();
  console.log('Running on Port 3000 . . .');
});
