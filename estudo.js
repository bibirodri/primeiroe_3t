let tabuada = 4;

function escreva(){
    document.write("<h1>Tabuada do " + tabuada + "</h1>");
    document.write(tabuada + " x 1 = " + (tabuada*1)+"<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2)+"<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3)+"<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4)+"<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5)+"<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6)+"<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7)+"<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8)+"<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9)+"<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10)+"<br>");
}


function minha tabuada(){
    for(let i=6; i <= 10;i++){
        document.write("tabuada do " + i + "<br>);
        for(let j = 1; J <= 10; j++){
            document. write(tabuada + " x " + i + " = " + (tabuada*i)+"<br>")
        }
            document.write("<br>");
    }
}
function quadrado(){
    for(let i = 1; i <= 1000; i++){
           document.write("o qudrado de "+ i + " é "+ (i*i) + "<br>")

    }
}
function calcula(){
    let val = document.getElementById("valor").Value;
    let j = document.getElementById("juros").Value;
    let t = document.getElementById("meses").Value;

    let res = val * (1+(j/100));

    document.write("resultado: "+res);
} 
 
