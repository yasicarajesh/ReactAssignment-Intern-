Array.prototype.beremoveobject =function(){ 
   var dup=[];{
   dup.push(arr.filter((ele,indx)=>indx!==arr.indexOf(ele))) }
   return Array.from(new Set(dup));

}
var arr = [1,2,2,3,4,1];
arr.beremoveobject(); 
