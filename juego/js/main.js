var tiro_1;
var tiro_2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var suma;
var turno = 1;	
var total_tiro2;
var punto; 
var Fotos; 
var V_max; 
var aux;   
var aux_2; 
var obje;
var turnos1;
var stop;


window.onload = init;

	Fotos = new Array();
	aux_2 = 0;

		Fotos [0] = "img/E1.png" 
		Fotos [1] = "img/E2.png" 
		Fotos [2] = "img/E3.png" 
		Fotos [3] = "img/E4.png" 
		Fotos [4] = "img/E5.png" 
		
		V_max = Fotos.length; 
		V_max = V_max -1;

function listo() {
	document.getElementById("inicios").style.visibility="hidden";
	document.getElementById("siguiente1").style.visibility="hidden";
	document.getElementById("listo1").style.visibility="hidden";
	document.getElementById("silenciar").style.visibility="visible";
	sprincipio.play();
	sprincipio.volume = 0.3;
}

function siguiente () {
			
			if (aux_2 == V_max){
			
				aux_2 = 0;
			
			}

			else{

				aux_2 = aux_2+1;

			}

			document.images.inicios.src = Fotos[aux_2];
		}

function init(){
	boton_tirar = document.getElementById("boton_tirar");
	boton_tirar.addEventListener("click",jugar);
	volverJ=document.getElementById("volverJ");
	volverJ.addEventListener("click",reiniciar);
	ins=document.getElementById("ins");
	ins.addEventListener("click",reglas)
	sonido=document.getElementById("sonidoG")
	sperder=document.getElementById("sonidoP")
	spunto=document.getElementById("sonidoE")
	sprincipio=document.getElementById("sonidoI")

	dado1 = document.getElementById("dado1");
	dado2 = document.getElementById("dado2");
	document.getElementById("silenciar").style.visibility="hidden";
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
			sonido.play();
			turnos1=document.getElementById("puesto").innerHTML = turno;
			sprincipio.pause();	
	}

	if(suma == 2 || suma == 3 || suma == 12){
		 	console.log("se reinicio el turno")
		 	turno = 1;
	 		swal("Oh mala suerte, Perdiste.")
	 		sperder.play();
	 		turnos1=document.getElementById("puesto").innerHTML = turno;
	 		sprincipio.pause();	
 	}

 	if(suma == 4){
 			punto = suma
 			swal("Consigue de nuevo el 4 para ganar!")
 			spunto.play();
 			turnos1=document.getElementById("puesto").innerHTML = turno;
 			obje=document.getElementById("objetivo").innerHTML = punto;
 	}
 	if(suma == 5){
 			punto = suma
 			swal("Consigue de nuevo el 5 para ganar!")
 			spunto.play();
 			turnos1=document.getElementById("puesto").innerHTML = turno;
 			obje=document.getElementById("objetivo").innerHTML = punto;
 	}

 	if(suma == 6){
 			punto = suma
 			swal("Consigue de nuevo el 6 para ganar!")
 			spunto.play();
 			turnos1=document.getElementById("puesto").innerHTML = turno;
 			obje=document.getElementById("objetivo").innerHTML = punto;
 	}

 	if(suma == 8){
 			punto = suma
 			swal("Consigue de nuevo el 8 para ganar!")
 			spunto.play();
 			turnos1=document.getElementById("puesto").innerHTML = turno;
 			obje=document.getElementById("objetivo").innerHTML = punto;
 	}

 	if(suma == 9){
 			punto = suma
 			swal("Consigue de nuevo el 9 para ganar!")
 			spunto.play();
 			turnos1=document.getElementById("puesto").innerHTML = turno;
 			obje=document.getElementById("objetivo").innerHTML = punto;
 	}

 	if(suma == 10){
 			punto = suma
 			swal("Consigue de nuevo el 10 para ganar!")
 			spunto.play();
 			turnos1=document.getElementById("puesto").innerHTML = turno;
 			obje=document.getElementById("objetivo").innerHTML = punto;

 	}
 	if(sprincipio.pause && punto == 0 && turno == 1){
			setTimeout(function(){
		    sprincipio.currentTime = 0
			sprincipio.play();
			},5000);
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
	 		swal("Oh mala suerte, Perdiste.")
	 		turno = 1;
	 		punto= 0;
	 		sperder.play();
	 		turnos1=document.getElementById("puesto").innerHTML = turno
	 		obje=document.getElementById("objetivo").innerHTML = punto;
	 		sprincipio.pause();	
		}
		else{
			turnos1=document.getElementById("puesto").innerHTML = turno;
		}
		if(total_tiro2 == punto)
		{
			console.log("se reinicio el turno")
			turno = 1;
			punto= 0;
		 	swal('Que buena suerte, ¡Ganaste!.');
		 	sonido.play();
		 	turnos1=document.getElementById("puesto").innerHTML = turno;
		 	obje=document.getElementById("objetivo").innerHTML = punto;
		 	sprincipio.pause();
		}
		if(sprincipio.pause && punto == 0 && turno == 1){
			setTimeout(function(){
		    sprincipio.currentTime = 0
			sprincipio.play();
			},5000);
		}
	}
}

function reiniciar(){
	console.log("se reinicio el turno")
	turno= 1;
	punto= 0;
	turnos1=document.getElementById("puesto").innerHTML = turno;
	obje=document.getElementById("objetivo").innerHTML = punto;
}

function reglas(){
	swal('Si en el primer tiro el jugador obtiene 7 (siete) u 11 (once) Gana la partida. Si en el primer tiro el jugador obtiene 2 (dos), 3(tres) o 12(doce)Pierde la partida. Si en el primer tiro obtiene 4 (cuatro), 5 (cinco), 6 (seis), 8 (ocho), 9 (nueve), ó 10 (diez), estableceel PUNTO. El tirador tiene que arrojar los dados tantas veces como sea necesario, hasta obtener el número que busca (Punto). Si antes sale el 7(siete), El jugador pierde.');
}

function silenciar(){
    if (sprincipio.play) {
        sprincipio.pause();
    }
}