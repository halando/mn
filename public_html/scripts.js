/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * import urllib.request
htmltartalom = urllib.request.urlopen("https://mnb,hu/arfolyamok")
htmlfile = open ("index.html", "w")
for sor in htmltatalom:
    #print(sor)
htmlfile.write(str(sor))
htmlfile.write(sor.decode("utf-8"))
htmlfile.close()

sor = sor.decode("utf-8")
htmlfile.write(sor+"\r\n")

 */

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://mnb.hu/arfolyamok",true);
xhr.onreadystatecahnge = function(){
    console.log(xhr.responseText);
}
xhr.send();


function tartalom(){
    var belso = document.getElementById("belso");
    console.log(belso.innerHTML);
}