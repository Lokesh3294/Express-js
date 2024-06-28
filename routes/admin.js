const express = require('express');
const router = express.Router();


router.get('/add-product',(req,res,next)=>{
    console.log("This is first middleware")
    res.send('<h1>Add Product</h1><form method="POST" action="http://localhost:3000/admin/store-product"><input type="text" name="title"/><input type="submit"/></form')
})

router.post('/store-product',(req,res,next)=>{
    res.send('Your Product is added!!')
    console.log("Form-Data:",req.body)
})

module.exports = router;