var tiro_1;
var tiro_2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var suma;
var turno = 1;	
var total_tiro2;
var punto; 

window.onload = init;

function init(){
	boton_tirar = document.getElementById("boton_tirar");
	boton_tirar.addEventListener("click",jugar);
	volverJ=document.getElementById("volverJ");
	volverJ.addEventListener("click",reiniciar);
	ins=document.getElementById("ins");
	ins.addEventListener("click",reglas)

	dado1 = document.getElementById("dado1");
	dado2 = document.getElementById("dado2");
}

function tirardado(){
	return Math.floor(Math.random() * 6) + 1 ;
}

function actualizarDado(ref,cara){
	ref.style.backgroundPosition = posiciones[cara-1]+"px";
}

function jugar(){
	tiro_1 = tirardado();//Retorna un numero entre 1 y 6
	tiro_2 = tirardado();
	actualizarDado(dado1,tiro_1);
	actualizarDado(dado2,tiro_2);

	console.log("Turno",turno)
	suma = tiro_1 + tiro_2; 

	turno= turno + 1;

	if(turno == 2){
		if(suma == 7 || suma == 11){
			console.log("se reinicio el turno")
			turno = 1;
			swal('Que buena suerte ¡Ganaste!.');
	}

	if(suma == 2 || suma == 3 || suma == 12){
		 	console.log("se reinicio el turno")
		 	turno = 1;
	 		swal("Oh mala suerte, Perdiste.")
 	}

 	if(suma == 4){
 			punto = suma
 			swal("Consigue de nuevo el 4para ganar!")

 	}
 	if(suma == 5){
 			punto = suma
 			swal("Consigue de nuevo el 5 para ganar!")

 	}

 	if(suma == 6){
 			punto = suma
 			swal("Consigue de nuevo el 6 para ganar!")

 	}

 	if(suma == 8){
 			punto = suma
 			swal("Consigue de nuevo el 8 para ganar!")

 	}

 	if(suma == 9){
 			punto = suma
 			swal("Consigue de nuevo el 9 para ganar!")

 	}

 	if(suma == 10){
 			punto = suma
 			swal("Consigue de nuevo el 10 para ganar!")

 	}
}
	if(turno > 2){
		tiro_1 = tirardado();//Retorna un numero entre 1 y 6
		tiro_2 = tirardado();
		actualizarDado(dado1,tiro_1);
		actualizarDado(dado2,tiro_2);

		console.log("Turno",turno)
		total_tiro2 = tiro_1 + tiro_2; 

		if(total_tiro2 == 7){
			console.log("se reinicio el turno")
		 	turno = 1;
	 		swal("Oh mala suerte, Perdiste.")
		}
		if(total_tiro2 == punto)
		{
			console.log("se reinicio el turno")
			turno= 1;
		 	swal('Que buena suerte, ¡Ganaste!.');
		}
	}
}

function reiniciar(){
	console.log("se reinicio el turno")
	turno= 1;
}

function reglas(){
	swal('Si en el primer tiro el jugador obtiene 7 (siete) u 11 (once) Gana la partida. Si en el primer tiro el jugador obtiene 2 (dos), 3(tres) o 12(doce)Pierde la partida. Si en el primer tiro obtiene 4 (cuatro), 5 (cinco), 6 (seis), 8 (ocho), 9 (nueve), ó 10 (diez), estableceel PUNTO. El tirador tiene que arrojar los dados tantas veces como sea necesario, hasta obtener el número que busca (Punto). Si antes sale el 7(siete), El jugador pierde.');
}
