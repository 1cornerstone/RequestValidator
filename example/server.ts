import express from 'express'
import Request from '../lib/RequestIndex'
import config from '../lib/config'

const app = express();
const mRequest= new Request(config);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(mRequest.request());

app.get('/order', function (req, res) {
    res.send('gotten');
});
app.get('/login', function (req, res) {
    res.send('login');
});
app.listen(4000, function () { console.log('listening'); });
