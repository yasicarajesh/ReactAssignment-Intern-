Number.prototype.format = function () {
   var num_parts = this.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
    return num_parts;
   };
var num = 1000;
num.format(); 