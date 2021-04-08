"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as cors from 'cors';
var cors = require('cors');
var bodyParser = __importStar(require("body-parser"));
require("reflect-metadata");
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
// declare metadata by @controller annotation
require("./controllers/HomeController");
require("./controllers/PrivateCustomerController");
require("./controllers/CompanyCustomerController");
var PrivateCustomerService_1 = require("./services/PrivateCustomerService");
var CompanyCustomerService_1 = require("./services/CompanyCustomerService");
var logger_1 = __importDefault(require("./loaders/logger"));
// set up container
var container = new inversify_1.Container();
container.bind('PrivateCustomerService').to(PrivateCustomerService_1.PrivateCustomerService);
container.bind('CompanyCustomerService').to(CompanyCustomerService_1.CompanyCustomerService);
// create server
var server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig(function (app) {
    // add body parser
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});
var app = server.build();
app.listen(3000, function () {
    logger_1.default.log('info', 'Server runs on Port 3000');
});
/*
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
      const user =  {
        id:1,
        req.body.fname,
        hashedPassword);
      userRepo.addUser(user);
      res.status(201).send();
    } catch {
      
      res.status(500).send();
    }
  });
 
  app.post('/api/login', async (req, res) => {
    const user = userRepo.users.find(u => u.fname == req.body.fname && u.lname == req.body.lname && u.id == req.body.id);
    if(user == null){
      return res.status(400).send('Can not find user');
    }
    try{
      if(await bycrypt.compare(req.body.password, user.password)){
        console.log(process.env.ACCESS_TOKEN_SECRET as string);
        const accessToken = jwt.sign({username: user.fname}, process.env.ACCESS_TOKEN_SECRET as string, )
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
});*/ 
