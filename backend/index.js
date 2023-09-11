
const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
const cors = require('cors'); // Import the cors package


//other option to solve the problems related to cors 
// app.use((req,res,next)=>{
//   res.setHeader('Access-Control-Allow-Origin','hhtp://localhost:3000');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin,  X-Requested-With, Content-Type, Accept'
//   );
//   next();
// })

app.use(cors());
app.use(express.json())
app.use('/api' , require('./Routes/CreateUser'))
app.use('/api' , require('./Routes/DisplayData'))
app.use('/api' , require('./Routes/OrderData'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


mongoDB();