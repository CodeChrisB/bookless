import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";
import e, { json, response } from "express";
import express from "express";
import { Client, DataType }  from "ts-postgres";
import { format } from "path";
import { NextFunction, Request, Response } from "express";
import jwt, { verify } from "jsonwebtoken";
import { User } from "./models/Authorisation/User";
import { UserService } from "./services/UserService";



async function main() {
    const client = new Client({"host":"database", "port": 5432, "user": "user", "password":"pass", "database":"booklessdb"});
    await client.connect();

    console.log('db works')
    try{
        const resultIterator = client.query("select * from product")
        console.log('ddd');

        for await (const row of resultIterator) {
            console.log(row); // output data in the console
            console.log('ddd');
        }
    } finally{
        await client.end();
    }
}


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

 
  app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
      id: 1, 
      username: 'brad',
      email: 'brad@gmail.com',
      admin:true
    };
  
    jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err:any, token:any) => {
        if(err){
            res.sendStatus(403);
        }
      res.json({
        token
      });
    });
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
