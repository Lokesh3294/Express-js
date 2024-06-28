const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const admin = require('./routes/admin');
const shop = require('./routes/shop')

app.use(bodyParser.urlencoded());
app.use('/admin',admin);
app.use(shop);
app.use((req,res,next)=>{
    res.status(404).send('<h1>404 Page Not Found</h1>')
})
app.listen(3000); 