const {connectToDb, getDb} =require('./db');

const express = require('express')
const reader = require('xlsx');


const app = express()
const port = 4000

let db;
connectToDb((err)=>{
  if(!err){
    app.listen(4000);
    db =getDb();
  }
})

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));


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

  db.collection("backdata").insertMany(data,function(err, res){
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
  })
  res.send(data).json
});
