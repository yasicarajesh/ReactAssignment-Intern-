 Array.prototype.beremoveobject =function(){
   console.log(arr.filter((ele,indx)=>indx!==arr.indexOf(ele)))

}
var arr = [1,2,2,3,4,1];
arr.beremoveobject(); 