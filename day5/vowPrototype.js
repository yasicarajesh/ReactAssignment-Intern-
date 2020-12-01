var str = "heelloo world";
var n=str.length;
var str2="";
String.prototype.character = function name() {
 for(var i=0;i<=n-1;i++)
 {
   switch(str[i])
{ 
 case 'a': {str2=str2+str[i];
  break;}
  case 'e':{str2=str2+str[i];
  break;}
 case 'i':{str2=str2+str[i];
  break;}
 case 'o':{str2=str2+str[i];
  break;}
 case 'u':{str2=str2+str[i];
  break;}
 case 'A':{str2=str2+str[i];
  break; }case 'E':{str2=str2+str[i];
  break; }case 'I':{str2=str2+str[i];
  break; }case 'O':{str2=str2+str[i];
  break; }case 'U':{str2=str2+str[i];
  break; }
 }
   
}}

str.character();
console.log(str2);







