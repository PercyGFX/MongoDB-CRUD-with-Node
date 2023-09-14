import express from "express";
const app = express()
import routes from './routes/routes.js'
import {connectToDatabase} from './services/db.js'
import {Db} from 'mongodb'




 
// routes
app.get('/',async (req,res)=>{

    try {
        const db = await connectToDatabase();
        const collection = db.collection('books');
        const data = await collection.find({}).toArray();
        res.status(200).json(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    
   
})

app.use('/', routes)


const port = process.env.PORT || 5000; // Default to port 3000 if PORT environment variable is not set
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 