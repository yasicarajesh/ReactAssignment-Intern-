function getsign(str,str2,t){
var count=0,max=0;
if(str[0]=="+")
{
  alert("+");
  count=1;
}
else if(str[0]=="-")
{
  alert("-");
  max=1;
}
if(str2[0]=="+" && count!=1)
 {
   alert("+");
    count=1;
 }

else if(str2[0]=="-"&& max!=1){
     alert("-");
      max=1;
  }
if(t[0]=="+" && count!=1)
 {
   alert("+");
    count=1;
 }

else if(t[0]=="-" && max!=1){
     alert("-");
      max=1;
  }
if(count==0 && max==0)
{
  alert("welcome");
}
}