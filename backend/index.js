const connectToMongo =require('./db');
const express = require('express')
const reader = require('xlsx');
connectToMongo();

const app = express()
const port = 4000
const db = connectToMongo();

// const filePath =process.argv.slice(2)[0];
const file =reader.readFile('./component/data.xlsx')
let data=[]
const sheets = file.SheetNames
  
for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
}

//printing data
app.get('/', (req, res) => {
  res.send(data).json
})

//add to database
app.post("/", (req, res) => {
  // console.log("its running 2: " + req.body);
  res.send(data).json
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})