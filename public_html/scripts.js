/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * import urllib.request
 * import re
htmltartalom = urllib.request.urlopen("https://mnb.hu/arfolyamok")
htmlfile = open ("index.html", "w")
rkif1 = re.compile("^.*<table>") #<=> var rkifl = new RegExp("^.*<table>");
rkif2 = re.compile("^.*<table>.*$") #<=> var rkif2 = new RegExp("^.*<table>.*$");
if rkifl.match(sor):
jelzo = False
adatok =""
print(sor)
jelzo = True
if jelzo:
adatok+=sor
if rkif2.match(sor):
jelzo = False
adatok = re.sub(".*<table>","",adatok)
adatok=re.sub(".*<cap.*ion>","",adatok)
adatok=re.sub(".*<thead>","",adatok)
adatok=re.sub(".*</thead>","",adatok)
adatok=re.sub(".*<tbody>","",adatok)
adatok=adatok.split)"<tr>")
print(adatok)
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
xhr.onreadystatechange = function(){
    console.log(xhr.responseText);
}
xhr.send();


function tartalom(){
    var belso = document.getElementById("belso");
    console.log(belso.innerHTML);
}