var str = "heelloo";
var n=str.length;
var str2="";
String.prototype.bespacify = function name() {
 
   for(var i=0;i<n-1;i++)
 {
    str2=str2+str[i]+" ";
   
 }
  str2=str2+str[i];
  alert(str2);
}

str.bespacify();
console.log(str2);
