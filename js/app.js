
 (function main(){
 	var boxes = Array.from(document.getElementsByClassName("imagenes"));
 	var work = document.getElementById("work");

 	var modal;
 	var bodyModal;
 	var close;
 	var imagen;
 	boxes.forEach(function(box){
 		box.addEventListener("click", function(){
 			modal = document.createElement("div");
 			modal.classList.add("box-services-modal");
 			bodyModal = document.createElement("div");
 			bodyModal.classList.add("modal-body");
 			bodyModal.innerHTML = box.innerHTML;			
 			modal.appendChild(bodyModal);

 			close = document.createElement("div");
 			close.classList.add("close");
 			imagen = document.createElement("img");
 			imagen.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
 			close.appendChild(imagen);
 			modal.appendChild(close);
 			work.appendChild(modal);
 			close.addEventListener("click",function(){
 				modal.classList.add("hide");
 				work.removeChild(modal);
 			});
 		});		
 	});
 })();