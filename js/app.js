//console.log("Estamos Conectados");
//document.write("Mensaje desde JS 1");
//document.write("<h1>Mensaje desde JS 2<h1>");

//alert("Mensaje de ALERTAAAAA!!!!");

var sw = 0;
var sw2 = "";
var v_var1 = 7;
var v_var2 = 7;
var v_var3 = 7;
var v_prom = (v_var1+v_var2+v_var3)/3;
var v_Arreglo = ["Juan Perez",50,4.3,true];

//console.log("El promedio de sus notas es:" ,prom);


if (v_prom<4) {
    console.log("Ha reprobado la asignatura")
}
else {
    console.log("Ha aprobado la asignatura")

    }

// sentencia Switch para evaluar varias condiciones simultaneamente


if (v_prom >= 1 && v_prom < 4) {sw=3;}
else if (v_prom >= 4 && v_prom < 5) {sw=4;}
else if (v_prom >= 5 && v_prom < 6) {sw=5;}
else if (v_prom >= 6 && v_prom <= 7) {sw=6;}

switch (sw)
{
    case 3:
        console.log("El promedio " + v_prom + " Es insuficiente");
        break;
    case 4:
        console.log("El promedio " + v_prom + " Es suficiente");
        break;
    case 5:
        console.log("El promedio " + v_prom + " Es bueno");
        break;
    case 6:
        console.log("El promedio " + v_prom + " Es muy bueno");
        break;
    default:
        console.log("El promedio no existe");
}


if (v_prom >= 1 && v_prom < 4) {sw2="I";}
else if (v_prom >= 4 && v_prom < 5) {sw2="S";}
else if (v_prom >= 5 && v_prom < 6) {sw2="B";}
else if (v_prom >= 6 && v_prom <= 7) {sw2="MB";}

switch (sw2)
{
    case "I":
        console.log("El promedio " + v_prom + " Es insuficiente");
        break;
    case "S":
        console.log("El promedio " + v_prom + " Es suficiente");
        break;
    case "B":
        console.log("El promedio " + v_prom + " Es bueno");
        break;
    case "MB":
        console.log("El promedio " + v_prom + " Es muy bueno");
        break;
    default:
        console.log("El promedio no existe");
}

console.log("El nombre es: "+ v_Arreglo[0])
console.log("La edad es: "+ v_Arreglo[1])
console.log("La nota es: "+ v_Arreglo[2])

if (v_Arreglo[3])
{
    console.log("Casado")
}
else {
    console.log("no Casado")
}

for(i=0;i<v_Arreglo.length;i++)
{
    console.log("id: "+i)
    console.log("El dato es: "+ v_Arreglo[i])
}

var x =0;

while (x< v_Arreglo.length)
{
    console.log("id 2: "+x)
    console.log("El dato es 2: "+ v_Arreglo[x])
    x=x+1
}


function mensaje()
{
    console.log("Hola Mundo")
}


mensaje();