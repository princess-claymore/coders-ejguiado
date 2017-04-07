document.getElementById("toggle").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
});

var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById('nav-background').style.display="none";
     document.getElementById("nav-header").classList.remove("header-in");
     document.getElementById("nav-header").style.opacity = 0;
   } else {
     document.getElementById('nav-background').style.display="table";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
     }
   }
   lastScrollTop = currentScroll;
 }, false);



  /* var coders=document.getElementsByClassName("coder6Lima");*/
  var coders=[arantza-burga,cindy-mendoza,cinthia,daguiana-revoredo,Emma-tapia,elizabeth,
  fiorella-cisneros,fio-quispe,flor-tello,FlorRetamozo,geraldine-chauca,glisse-jorge,grecia-rayme,
  janine-vega,karin-Alejo,liliana-Peña,LourdesVilchez,maria-grecia,natha-astolar,mary-castillo,marilu-llamocca,
rosario-felix,neiza-nunez,mishel-velasquez,nadia-cuadros,michelle-more,miriam,miriam-peralta,stephanie-hiyagon,nombre];

   function creandoDiv(){
		var divMayor= document.getElementById("ContenedorCoders")
		divMayor.innerHTML="";

    for(var i = 0; i<coders.length;i++){
			var divCoders = document.createElement("div");
			divCoders.classList.add("coder");/*clase coder*/

			for (var prop in coders[i]) {
				var dato = document.createElement("p");
				dato.innerHTML= prop + " : " + coders[i][prop];
				divCoders.appendChild(dato);
			}
			divMayor.appendChild(divCoders);
		}
  }
