import express from "express";
const app = express()
import routes from './routes/routes.js'


app.get('/', (req,res)=> {

  res.send("working on 5000")
})

app.use('/', routes)


const port = process.env.PORT || 5000; // Default to port 3000 if PORT environment variable is not set
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 