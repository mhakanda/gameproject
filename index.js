const express = require('express');
const port  = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
res.send(' ');

});

//app.listen(port)

app.listen(port,()=>{
  console.log(`Server is up at port ${port}`);
});
