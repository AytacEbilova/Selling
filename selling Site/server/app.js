
const express = require('express')
const app = express()
const bodyParser=require("body-parser");
const cors=require("cors")
require("dotenv").config();
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(cors())
const { Schema } = mongoose;

const PORT=process.env.PORT || 3000;
const DB=process.env.DB_URL;
mongoose.connect(DB)
.then(() =>
app.listen(PORT, () => {
    console.log(`Example app listening on port:http://localhost:${PORT}`)
})

);

const ProductSchema = new Schema({
    image: {type: String,required:true},
    title: {type: String,required:true}, 
    bio: {type: String,required:true}
    
})
const Product = mongoose.model('Product', ProductSchema);


app.get("/products",async(req,res)=>{
    try {
        const products =await Product.find({});
        if (products.length>0) {
            res.status(200).send({
                message:'success',
                data:products
            })
        } else {
            res.status(204).send({
                message:'empty data',
                data:null
            })
        }
       
    } catch (error) {
        res.status(500).send({
            message:error.message,
            error:true
        })
    }
})

app.get("/products/:id/",async(req,res)=>{
    const {id}=req.params;
    try {
        const oneProduct=await Product.findById(id)
        if (oneProduct) {
            res.status(200).send({
                message:'success',
                data:oneProduct
            })
        } else {
            res.status(204).send({
                message:'empty data',
                data:null
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message,
            error:true
        })
    }
})

app.delete("/products/:id/",async(req,res)=>{
    const {id}=req.params;
    try {
        const deleteProduct=await Product.findByIdAndDelete(id);
        res.status(200).send({
            message:'delete',
            deleteProduct:deleteProduct
        })
    } catch (error) {
        res.status(500).send({
            message:error.message,
            error:true
        })
    }
})

app.post("/products",async(req,res)=>{
    const newProduct=new Product(req.body);
    console.log(newProduct)
    try {
        await newProduct.save();
        res.status(200).send({
         message:'posted',
         newProduct:newProduct
     })
    } catch (error) {
        res.status(500).send({
            message:error.message,
            error:true
        })
    }

})