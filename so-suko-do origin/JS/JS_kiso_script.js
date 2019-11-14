
function loop_func(){
  var num;
  num = document.getElementById('loop_in').value;
  document.getElementById('loop_out').innerHTML = "";

 for (var i = 1; i <= num; i++) {

   document.getElementById('loop_out').innerHTML += i + "回目の繰り返しです<br>";

 }

}//3.ｸﾘｶｴｼ

function sankaku(){
 var angle1;
 angle1 = document.getElementById('teihen').value;

 var angle2;
 angle2 = document.getElementById('takasa').value;

 var menseki;
 menseki = angle1*angle2/2;
 document.getElementById('goukei').innerHTML = menseki;

}//2.ｻﾝｶｸ

function loop_func(){
  var num= document.getElementById("loop_inin").value;
  document.getElementById("loop_outout").innerHTML= "";
  var sum = 0;


 for (var i = 1; i <= num; i++) {
  sum += i;

}

  document.getElementById("loop_outout").innerHTML = sum;
}//3+α.ｸﾘｶｴｼ

function loop_func(){
  var num= document.getElementById("loop_ininin").value;
  document.getElementById("loop_outoutout").innerHTML= "";
  var sum = 0;


 for (var i = 1; i <= num; i++) {
  sum += i^2;

}

  document.getElementById("loop_outoutout").innerHTML = sum;

}//3+β.ｸﾘｶｴｼ

function color(){

  var color = document.getElementById('color_in').value;
  var res;
  res = '<p style="color:'+color+';">result</p>';
  document.getElementById('color_out').innerHTML = res;




}
