var mat = [];
mat[0]=1;
mat[1]=2;
mat[2]=3;
mat[3]=4;
mat[4]=5;
mat[5]=6;
mat[6]=7;
mat[7]=8;
mat[8]=9;
var val = 0;

function index(dd,i){
   var id=dd.id;

   if(val%2 === 0){
   mat[i]="one";
   document.getElementById(id).innerHTML='<i class="fa-solid fa-o"></i>';
   document.getElementById(id).style.textShadow="0px 0px 25px rgb(255, 0, 0)";
   val++;
   }
   else{
   mat[i]="two";
   document.getElementById(id).innerHTML='<i class="fa-solid fa-xmark"></i>';
   document.getElementById(id).style.textShadow="0px 0px 25px rgb(12, 255, 12)";
   val++;
   }
document.getElementById("done").innerHTML='Continue <br> Tha metch';
condi();
}
function condi(){

    if((mat[0]==mat[3] && mat[3]==mat[6])){
    document.getElementById("end_m").style.top='0%';
    document.getElementById("end_m").style.left='16%';
    document.getElementById("end_m").style.height='100%';
    document.getElementById("end_m").style.width='10px';
    document.getElementById("end_m").style.display='block';
    document.getElementById("done").innerHTML='Congratulation <br> Metch is End';
    }

    if((mat[0]==mat[1] && mat[1]==mat[2])){
    document.getElementById("end_m").style.top='17%';
    document.getElementById("end_m").style.left='0%';
    document.getElementById("end_m").style.height='10px';
    document.getElementById("end_m").style.width='100%';
    document.getElementById("end_m").style.display='block';
    document.getElementById("done").innerHTML='Congratulation <br> Metch is End';
    }

    if( (mat[3]==mat[4] && mat[4]==mat[5]) ){
    document.getElementById("end_m").style.top='50%';
    document.getElementById("end_m").style.left='0%';
    document.getElementById("end_m").style.height='10px';
    document.getElementById("end_m").style.width='100%';
    document.getElementById("end_m").style.display='block';
    document.getElementById("done").innerHTML='Congratulation <br> Metch is End';
    }

    if((mat[6]==mat[7] && mat[7]==mat[8])){
    document.getElementById("end_m").style.top='83%';
    document.getElementById("end_m").style.left='0%';
    document.getElementById("end_m").style.height='10px';
    document.getElementById("end_m").style.width='100%';
    document.getElementById("end_m").style.display='block';
    document.getElementById("done").innerHTML='Congratulation <br> Metch is End';
    }

    if((mat[1]==mat[4] && mat[4]==mat[7])){
    document.getElementById("end_m").style.top='0%';
    document.getElementById("end_m").style.left='49%';
    document.getElementById("end_m").style.height='100%';
    document.getElementById("end_m").style.width='10px';
    document.getElementById("end_m").style.display='block';
    document.getElementById("done").innerHTML='Congratulation <br> Metch is End';
    }

    if((mat[2]==mat[5] && mat[5]==mat[8]) ){
    document.getElementById("end_m").style.top='0%';
    document.getElementById("end_m").style.left='82%';
    document.getElementById("end_m").style.height='100%';
    document.getElementById("end_m").style.width='10px';
    document.getElementById("end_m").style.display='block';
    document.getElementById("done").innerHTML='Congratulation <br> Metch is End';
    }

    if((mat[0]==mat[4] && mat[4]==mat[8])){
    document.getElementById("end_m").style.top='50%';
    document.getElementById("end_m").style.left='0%';
    document.getElementById("end_m").style.height='10px';
    document.getElementById("end_m").style.width='100%';
    document.getElementById("end_m").style.transform='rotate(45deg)';
    document.getElementById("end_m").style.display='block';
    document.getElementById("done").innerHTML='Congratulation <br> Metch is End';
    }
 
    if((mat[2]==mat[4] && mat[4]==mat[6])){
    document.getElementById("end_m").style.top='50%';
    document.getElementById("end_m").style.left='0%';
    document.getElementById("end_m").style.height='10px';
    document.getElementById("end_m").style.width='100%';
    document.getElementById("end_m").style.transform='rotate(135deg)';
    document.getElementById("end_m").style.display='block';
    document.getElementById("done").innerHTML='Congratulation <br> Metch is End';
    }

}


function onetouch(){
    window.location.reload();
}




