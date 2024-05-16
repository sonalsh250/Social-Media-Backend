import express from 'express';
import mongoose from 'mongoose';

const app=express();

// app.use("/api", (req, res, next)=>{
//     res.send("Hello World");
// });

mongoose.connect('mongodb+srv://sonalsh250:VrPULwL5fMnBwbyJ@cluster0.9xnuqs9.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0').then(()=>app.listen(5000)).then(()=>console.log("Connected to database.")).catch((err)=>console.log(err));
