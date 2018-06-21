window.onload = init;

var buton

function init() {
	buton=document.getElementById("botao");
	buton.addEventListener('click', calcular)
}

function calcular() {
	
	var CI = document.getElementById("capital").value; // Capital Inicial
 	var T = document.getElementById("tempo").value; //Tempo (mês)
	var JA = document.getElementById("jurosaplicado").value; //Juros Aplicados
	var i // Índice
	var M // Resultado final
	JA = JA / 100;
	//JA = JA + 1;
	//JA = Math.pow(JA, T);
	//C = C * JA;


	for(i=1;i<=T;i++){
		console.log(12)
		M= CI*(1+JA);
		document.getElementById("R").innerHTML += i  + "--" + CI + "--" + M + '<br>';
		CI = M;
	}
}
