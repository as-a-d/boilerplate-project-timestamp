// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api", (req,res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString()
    
  })
})

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
str = 'insia '

console.log([...str].includes('z'))
console.log(typeof NaN === 'number')

// test
app.get("/api/:date?",(req,res) => {
  date = req.params.date
  date_format = new Date(date)
  if (isNaN(date_format.getTime())==true) {

    if (isNaN(Number(date)) ==false) {
      res.json({
        unix: new Date(Number(date)).getTime(),
        utc: new Date(Number(date)).toUTCString()
      })



    
    } else {res.json({error:"Invalid Date"})}
     
    
  }

  else (res.json({
    unix : date_format.getTime(),
    utc : date_format.toUTCString()
    
  }))



  

})



// app.get("/api/1451001600000",(req,res) => {
//   date = req.params.date
//   res.json({
//     unix : new Date(Number(date)).getTime(),
//     utc :  new Date(Number(date)).toUTCString()

//   })
// })




// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
