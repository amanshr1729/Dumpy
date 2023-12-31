import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'
import dotenv from 'dotenv';
const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());
app.get('/', (req, res) => {
    res.send('APP IS RUNNING');
});
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const CONNECTION_URL = process.env.mongoUrl ;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Service connected to MongoDB successfully on port: ${PORT}!`)))
.catch((error) => console.log(error));
