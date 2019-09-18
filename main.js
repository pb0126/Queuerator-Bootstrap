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
function dropdown(){
    if(i==0){
        document.getElementById("nav-dropdown").style.display="block";
        document.getElementById("dropdown-ico").style.display="none";
        document.getElementById("fall-up-ico").style.display="inline-block";
        document.getElementById("nav-list").style.marginRight="0.3em";
        i=1;
    }
    else{
        document.getElementById("nav-dropdown").style.display="none";
        document.getElementById("dropdown-ico").style.display="inline-block";
        document.getElementById("fall-up-ico").style.display="none";
        document.getElementById("nav-list").style.marginRight="0";
        i=0;
    }
}
// function activeClass(){
//   let a=1;
//   if(a==1){
//     document.getElementById("nav-res-list-a").addclass("")
//   }
// }