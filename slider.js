var i=0;
var images=[];
var time=3000;
images[0]='image_1.jpg';
images[1]="image_2.jpg";
images[2]="image_3.jpg";
function change(){
	document.slide.src = images[i];
	if(i<images.length-1)
   {i++;}
else{
	i=0;
}
setTimeout("change()",time);
}
window.onload=change;
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


