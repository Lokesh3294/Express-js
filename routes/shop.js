const express = require('express');
const router = express.Router();

router.get('/shop',(req,res,next)=>{
    res.send('<h1>Welcome to shop!!</h1>')
    
})
router.get('/',(req,res,next)=>{
    res.send('<h1>Welcome to Homepage</h1>')
})

module.exports = router;