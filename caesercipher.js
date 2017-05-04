//caeser cipher
function rot13(str) { // LBH QVQ VG!
  var arr=str.split("");
  var arr2=[];
  console.log(str.charCodeAt(4));
  for(var i=0;i<arr.length ;i++){
    
    if(str.charCodeAt(i)<78 &&  str.charCodeAt(i)>64 )
      
     arr[i] = String.fromCodePoint( str.charCodeAt(i) + 13 );
      
      else if ( str.charCodeAt(i)>77 &&  str.charCodeAt(i)<91 )
      arr[i] = String.fromCodePoint( str.charCodeAt(i) - 13 );
  }
  
   return arr.join("");
}

rot13("SERR CVMMN!");

