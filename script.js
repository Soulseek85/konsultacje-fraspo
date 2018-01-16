var suma = '<img src="img/main.jpg">';
var i;
// var i = 2;

// suma = document.getElementById("tresc").innerHTML = '<img src="img/1.png">';
// document.getElementById("tresc").innerHTML = '<img src="img/1.png">';

var a = document.getElementById("tresc");

for (i = 1; i <= 12; i++)
{
	suma += a.innerHTML = '<img src="img/' + i + '.png">';
}

a.innerHTML = suma;
