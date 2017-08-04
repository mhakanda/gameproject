//---------------------------------------------------------new code--
//randomInteger will create a random integer between mininteger and maxinteger, both inclusive
randomInteger = function(mininteger,maxinteger){
  return Number(mininteger+Math.floor((Math.random() * (maxinteger+1-mininteger))));
}
//------------------------------------------------------------------------
//samplingNonRepeat will create a random sample of length b from l
//it is non repeatative
samplingNonRepeat = function(l,b){
g = []
for (i = 0; i < b; i++) {
      r = randomInteger(0,l.length-1);
      g.push(l[r]);
      l.splice(r,1);
  }
  return g
};
//--------------------------------------------------------------------------
//auto increment numbers
numGenerate = function(first,last){
  g = [];
  for (i = first; i<last+1 ;i++){
    g.push(i);
  };
  return g;
};
//-------------------------------------------------------------------------
//given an array l and number of options variable b
//it will generate target and options as an array
//c is the additional repeat for target
//c is the number of additional repeatation
//if c = 1, then in options target will present twice, other options are unique
//if c = 0, there is no repeatation , just one target in options
targetsRepeat = function(l,b,c){
    targetindex = randomInteger(0,l.length-1)
    var target = l[targetindex]; //this is our target
    l.splice(targetindex,1)//removing the target from l
    gg = numGenerate(0,b-1);
    myindexforoptions = samplingNonRepeat(gg,b-c-1) //index of others in options
    var g = samplingNonRepeat(l,b-(c+1));//get others
    var pp = [];
for (k = 0;k<b;k++){
  if (myindexforoptions.includes(k)){
      pp[k] = g[myindexforoptions.indexOf(k)];
    }
    else {
      pp[k] = target;
    }
};
    pp.splice(0,0,target);
    return pp;
};
//------------------------------------------------------------------------new code
//var allpics = { 'one': 1111, 'two': 1112, 'three': 1121,'four':1122,'five':1211,'six':1212,'seven':1221,'eight':1222 };
// Put the object into storage
myNewgame = function(){
localStorage.clear();
var allpics = ['1111','1112','1121','1122','1211','1212','1221','1222'];
var b = 6;//number of options
var c = samplingNonRepeat([0,1,2],1)[0];
var h = targetsRepeat(allpics,b,c);
var top = h[0];
var bot = h.slice(1,);
document.getElementById("pic0").src = "pics/"+ top+".png";
document.getElementById("pic1").src = "pics/"+ bot[0]+".png";
document.getElementById("pic2").src = "pics/"+ bot[1]+".png";
document.getElementById("pic3").src = "pics/"+ bot[2]+".png";
document.getElementById("pic4").src = "pics/"+ bot[3]+".png";
document.getElementById("pic5").src = "pics/"+ bot[4]+".png";
document.getElementById("pic6").src = "pics/"+ bot[5]+".png";
//-------------------------------------------------------------------
localStorage.state = 1;//state 1 means middle of game, 0 means game over
localStorage.top = top;
localStorage.bot = bot;
localStorage.isCompleted = 0;
//localStorage.removeItem(picId);
var picId = ['pic1','pic2','pic3','pic4','pic5','pic6']
localStorage.picId = picId;
for (j in picId){document.getElementById(picId[j]).classList.remove("nullCursor");}
document.getElementById("buttonId").classList.add("disabled");
};
//----------------------------------
myNewgame();
//console.log(localStorage);
//------------------------------------
myFunction = function(){
  if (Number(localStorage.isCompleted)){
myNewgame();}
//console.log(localStorage);
  };

//----------------------------------------
matchingAction = function(nuM){
  var d = document.getElementById("pic"+String(nuM))
  var top = localStorage.top;
  var bot = localStorage.bot;
  bot = bot.split(",");
  //console.log(localStorage);
  if (Number(localStorage.state)){
    //console.log('Inside if');
  if (top===bot[nuM-1]){
    d.src = "pics/"+"y1"+".jpg";
    localStorage.state = 0;
    //d.className += "nullCursor";
    var picId = localStorage.picId;
    picId = picId.split(",");
    for (j in picId){document.getElementById(picId[j]).classList.add("nullCursor");}
    localStorage.isCompleted = 1;
    document.getElementById("buttonId").classList.remove("disabled");
  }
  else {d.src = "pics/"+"x1"+".jpg";
d.classList.add("nullCursor");}
}
};
//----------------------------------------
