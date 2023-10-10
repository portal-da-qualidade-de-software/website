// window.onload = function() {
// 	setTimeout(function() {
// 	  window.scrollTo(0, 0);
// 	}, 0);
// };

window.addEventListener('load', function() {
	setTimeout(function() {
			window.scrollTo(0, 0);
	}, 0);
});


let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function() {
	nextImage();
}, 4500);

function nextImage() {
	count++;

	if (count > 4) {
		count = 1;
	}

	document.getElementById("radio" + count).checked = true;
}

// function LerMais(){
// 	var pontos = document.getElementById("pontos");
// 	var mais = document.getElementById("mais");
// 	var btnLerMais = document.getElementById("btnLerMais");
	
// 	if(pontos.style.display === "none"){
// 		pontos.style.display = "inline";
// 		mais.style.display = "none";
// 		btnLerMais.innerHTML = "Ler Mais";
// 	}
// 	else{
// 		pontos.style.display = "none";
// 		mais.style.display = "inline";
// 		btnLerMais.innerHTML = "Ler Menos";
// 	}
// }