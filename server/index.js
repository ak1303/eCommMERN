import express from "express";//in es6, previously it was const expres=require('express');"type": "module",in json to use es6 concept
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import router from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";



const app=express();
app.use(cors());


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);

dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);


const PORT=8000;
app.listen(PORT, ()=>
console.log(`Server is running succesfully on PORT ${PORT}`)
);

DefaultData();