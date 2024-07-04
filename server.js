import express from 'express'

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/test',(req,res)=>{
  res.status(200).send("yes")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app;