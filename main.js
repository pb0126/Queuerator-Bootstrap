var i=0;
function open_res_sidenav(){
  if(i==0){
    document.getElementById("nav-res-sidebar").style.display="block";
    document.getElementById("nav-res-list-ico").style.display="none";
    document.getElementById("nav-res-closebtn").style.display="block";
    i=1;
  }
  else{
    document.getElementById("nav-res-sidebar").style.display="none";
    document.getElementById("nav-res-closebtn").style.display="none";
    document.getElementById("nav-res-list-ico").style.display="block";
    i=0;
    }	
}