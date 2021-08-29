const express = require("express");
const path = require("path");
const app = express();
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/foodData', {useNewUrlParser: true});
const port = 80;


// express specify stuff    
// app.use('/static',express.static('static')) //for serving static file
// app.use(express.urlencoded())


// app.set('view engine', 'html') //set the template engine as pug
// app.set('views',path.join(__dirname,'static')) //set the view directory


// app.get('/',(req,res)=>{
//     const params = { }
//     res.status(200).render('index.html',params);
// })



app.get('/', (req, res) => {
    res.send('Hello World!')
  })





app.listen(port, ()=>{
    console.log(`the app started on port ${port}`);
})
