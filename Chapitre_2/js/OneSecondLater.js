console.log("-===[ Next second ]===-");
var h, m, s, hs, ms, ss;
h = -1;
m = -1;
s = -1;


while (h < 0 || h > 23)
h = prompt("Entrez l'heure\n");
while (m < 0 || m > 59)
m = prompt("Entrez les minutes\n");
while (s < 0 || s > 59)
s = prompt("Entrez les secondes\n");
console.log("L'heure entrée est " + h + ":" + m + ":" + s +".");

h = Number(h);
m = Number(m);
s = Number(s);

hs = h + 1;
if(hs == 24) hs = 00;

ms = m + 1;
if(ms == 60) ms = 00;

ss = s + 1;
if(ss == 60) ss = 00;

console.log("One second later:" + hs + ":" + ms + ":" + ss +".");