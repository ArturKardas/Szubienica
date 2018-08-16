/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();


function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo;
    
}

window.onload = wypisz_haslo;