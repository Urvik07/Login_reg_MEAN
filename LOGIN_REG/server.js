const express = require('express')


const app = express()

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes=require('./route/routes');
const cors = require('cors');

app.use(cors(
    {
        origin:"http://localhost:4200"
    }
));

//Database connection
mongoose.connect("mongodb://localhost:27017/abc",{useNewUrlParser:true,useUnifiedTopology:true},

    function checkdb(e){
            if(e){
                console.log("error db");
            }else
            {
                console.log("DB started");
            }
    }
);




//First connect the coonection express connectivity
app.listen(9002,function check(e)
{
if(e)
console.log("Error");
else
console.log("Started");
});

app.use(express.json());
app.use(routes);

//node server.js