Array.prototype.befindobject = function() {
 var user=[];
   for(var i=0;i<sampleinput.length;i++){
    user[i]= sampleinput[i].name;
   }
 console.log(user);
};

var sampleinput =[
  {name: "John",age:26},
  {name: "shiva",age:27}
];
sampleinput.befindobject();