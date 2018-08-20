/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var haslo = "UDERZW STÓŁ A NORZYCE SIĘ ODEZWĄ";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var haslo1= "";

for(i=0;i<dlugosc;i++)
{
	if(haslo.charAt(i)==" ")haslo1 = haslo1 + " ";
	else haslo1= haslo1 + "-";
}


function restart(){
	haslo1 = "";
	numer = 1;
	document.getElementById("szubienica").innerHTML = "<img src=s0.jpg>";
	for(i=0;i<dlugosc;i++)
	{
		if(haslo.charAt(i)==" ")haslo1 = haslo1 + " ";
		else haslo1= haslo1 + "-";
	}
	document.getElementById("wynik").innerHTML = "Powodzenia!!!";
	start();
}

function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
    
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";






function start(){
	var trescDiva="";
	var a = "a";
	
	for(i=0;i<35;i++){
		var element = "lit" + i;
		trescDiva = trescDiva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+ litery[i]+'</div>';
		if(i%7==6) trescDiva = trescDiva + '<div style="clear:both;"></div>';
	
	}
	document.getElementById("wynik").innerHTML = "Powodzenia!!!";
	document.getElementById("alfabet").innerHTML=trescDiva;

	
	wypisz_haslo();
	
	
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if(miejsce > this.length-1){ return this.toString;}
	else return this.substr(0,miejsce)+znak+this.substr(miejsce + 1);

}


function sprawdz(nr)
{
	var x = false;
	for(i=0 ; i<dlugosc ; i++)
	{
		if(haslo.charAt(i)==litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			
			x=true;
		}
	
		
	}
	
	if(x==false) {
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#FF0000";
		document.getElementById(element).style.color = "#880000";
		document.getElementById(element).style.border = "3px solid #880000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
		wybierzObraz();
	}
	else{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003333";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");


	}
	if(haslo == haslo1){
		for(i=0;i<34;i++){
			var element = "lit" + i;
		document.getElementById(element).setAttribute("onclick",";");
		}
		
		document.getElementById("wynik").innerHTML = "WYGRAŁEŚ!!!";
	}
	wypisz_haslo();
}



var obrazek;
var numer = 1;
function wybierzObraz(){
	var przegrana = "Koniec Gry  :(";
	obrazek = "<img src=s"+numer+".jpg>";
	document.getElementById("szubienica").innerHTML = obrazek;
	
	if(numer <9)
	{
		numer++;

	}
	else
	{
		document.getElementById("wynik").innerHTML = przegrana ;
		for(i=0;i<34;i++){
			var element = "lit" + i;
		document.getElementById(element).setAttribute("onclick",";");
		}
	}
	
	wypisz_haslo();
}
