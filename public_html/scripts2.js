/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Valuta(penznem, devizanem, egyseg, forintban){
    this.penznem = penznem;
    this.devizanem = devizanem;
    this.egyseg = egyseg;
    this.forintban = forintban;
    Valuta.prototype.toString = function(){
        var valasz = "{";
        valasz += this.penznem;
        valasz += ",";
         valasz += this.devizanem;
        valasz += ",";
         valasz += this.egyseg;
        valasz += ",";
         valasz += this.forintban;
        valasz += ",";
        return valasz;
    }
        
}

//var valuta = new Valuta("HUF", "magyar forint", 1,1); 
//console.log(valuta);
//window.alert(valuta);

var valutak =[];
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://mnb.hu/arfolyamok",false);
xhr.onreadystatechange= function(){
    if(xhr.status == 200 &&xhr.readyState==4){
        var sorok = xhr.responseText.split("\n");
        console.log(sorok.length);
    }
}
xhr.send();
//console.log(xhr.responseText);