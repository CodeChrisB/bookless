import * as bodyParser from 'body-parser';
import "reflect-metadata";
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

// declare metadata by @controller annotation
import "./controllers/HomeController";
import "./controllers/PrivateCustomerController";
import { PrivateCustomerService } from './services/PrivateCustomerService';
import { CompanyCustomerService } from './services/CompanyCustomerService';

// set up container
let container = new Container();
container.bind<PrivateCustomerService>('PrivateCustomerService').to(PrivateCustomerService);
container.bind<CompanyCustomerService>('CompanyCustomerService').to(CompanyCustomerService);
// create server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

let app = server.build();
app.listen(3000, () => {
  console.log('Server runs on Port 3000');
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