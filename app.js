const express = require ('express')
const {products} = require('./data')

const app = express()

app.get('/',(req,res)=>{
    res.status(200).send("<h1 style = 'color:skyblue'>welcome to asto<span style = 'color:green'>S</span>tore</h1>\
       <a style ='green' href = '/api/products'>products page</a> ")
})

app.get('/api/products',(req,res)=>{
    const newProduct = products.map((product)=>{
        const {id,name,image} = product
        return {id,name,image}
    })
    res.status(200).json(newProduct)
})

app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params
    const singleProduct = products.find((product)=> product.id === Number(productID))
    if (!singleProduct) {
        res.status(404).send('No product found')
        console.log(req.params)
        console.log(req)
    }
    else {
        res.status(200).send(singleProduct)
        console.log(req.params)
    }
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('Hello, world!')
})

app.get('/api/v1/query',(req,res)=>{
    const {search,limit} = req.query
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts.slice(0,Number(limit))
    }
    res.status(200).json(sortedProducts)
    console.log(req.query)
    if (sortedProducts.length < 1) {
        // res.status(200).send('No products  matched your search')
        res.status(200).json({success:true})
    }
})


app.listen(5000,console.log("App started on port 5000")) 
