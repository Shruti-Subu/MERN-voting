//this allows us to make privte files which we donot want to share like in github...
require('dotenv').config();


const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');


const handle=require('./handlers');
const db=require('./models');
const routes=require('./routes');



const app=express();
const port=process.env.PORT;

//all cors bodyarser act as middleware so
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=> res.send('hello world'));
app.use('/api/auth',routes.auth);
app.use('/api/poll',routes.poll);



app.use((req,res,next)=>{
   const err=new Error('Not found');
   err.status=404;
   next(err);
});

app.use(handle.notFound);
app.use(handle.errors);

//start the server
app.listen(port,console.log(`Server started on port ${port}`));