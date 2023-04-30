const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blogModel');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blogs', async(req, res) => {
    try {
        const blogs = await Blog.find({});
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



app.post('/blogs', async(req, res) => {
    try {
        const blog = await Blog.create(req.body)
        res.status(200).json(blog);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

mongoose.set("strictQuery", false)
  mongoose.connect('mongodb+srv://admin:123456admin@arcapi.tl0sfg2.mongodb.net/Node-API?retryWrites=true&w=majority')
  .then(() => {
    app.listen(5000, () => {
        console.log("Example app listening on port 3000")
      })
      console.log("connected to dbs");
  }).catch((error) => {
      console.log(error);
  })