const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('app');

dotenv.config({path: './config.env'});

const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=>{
    console.log(`Server is listning on Port ${PORT}`)
})


