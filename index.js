const express = require('express');
const port  = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/',(req,res)=>{
//res.send(' Hello world');
var jj = (__dirname + '/public'+'/home.html');
//res.send(jj)
//res.render(jj);
res.send(jj)

});

app.listen(port,()=>{
  console.log(`Server is up at port ${port}`);
});
