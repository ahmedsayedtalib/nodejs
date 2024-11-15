const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
   res.send("<h1>Welcome to asto<span style = 'color:green'>S</span>tore</h1><a href = '/api/products'>Products</a>")
})

app.get('/api/products',(req,res)=>{
    const newProduct = products.map((product)=>{ 
        const {id,name,image} = product
        return {id,name,image}
    })
    res.json(newProduct)
})



app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params
    const singleProduct = products.find((product)=> product.id === Number(productID))
    if(!singleProduct) {
        return res.status(404).send('No such Product')
    }
    res.json(singleProduct)

    console.log(req)
    console.log(req.params)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('Hello, Ahmed')
})


app.get('/all',(req,res)=>{
    res.json(products)
})

app.listen(5000,()=>{console.log("Server is listening on port 5000")})