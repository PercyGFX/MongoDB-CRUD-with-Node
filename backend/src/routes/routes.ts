import express from 'express'
const router = express.Router();

router.get('/books',(req,res)=>{

    res.send("books here")

})

export default router;