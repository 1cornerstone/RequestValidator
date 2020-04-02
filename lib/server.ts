
import express from 'express'
import bodyParser from "body-parser";
import request from './RequestIndex'
 import routeObject from "./config";

 let app = express();

 let mRequest = new request(routeObject);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended :false
}));
app.use(mRequest.request());

app.get('/',(req,res)=>{
    res.send('gotten')
});

app.get('/login',(req,res)=>{
    res.send('login')
});


app.listen(4000,()=>{console.log('listening')});

