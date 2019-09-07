var i=0;
function openWtab(){
  if(i==0){
    console.log(i);
    document.getElementById("nav-res-sidebar").style.display="block";
    document.getElementById("nav-res-list-ico").style.display="none";
    document.getElementById("nav-res-closebtn").style.display="block";
    i=1;
    console.log(i);
  }
  else{
    document.getElementById("nav-res-sidebar").style.display="none";
    document.getElementById("nav-res-closebtn").style.display="none";
    document.getElementById("nav-res-list-ico").style.display="block";
    i=0;
    }	
}