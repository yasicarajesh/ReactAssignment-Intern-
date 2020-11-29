var n = prompt();
n=n%100;
var count=0;
var d=0;
var max=0;
if(n==0)
{
  console.log("True");
}
else{
while (n!=0) {
  d=n % 10;
  max=d;//2
  n=Math.trunc(n / 10);
  if(d==n)
  {
     console.log("True");
     break;
  }
  else
  {
  console.log("false");
  break;
  }
  }
}
