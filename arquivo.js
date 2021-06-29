function main1()
{ 
  
  window.alert("Meu Primeiro Script");


}
function mostraAlerta() {
  alert("Funciona!");
  }

  function geraTabela() {
    document.write('<table border=1 width="100%">');
    var valores = "00336699CCFF";
    var r, g, b;
    var cor;
    for (r=0; r<6; r++) {
    for (g=0; g<6; g++) {if (g%2==0) document.write("<tr class='btd'>");
    for (b=0; b<6; b++) {
    cor = valores.substr(2*r,2)
    + valores.substr(2*g,2)
    + valores.substr(2*b,2);
    document.write('<td align="center" bgcolor="#'+cor+'">');
    if (g<3) document.write("<font size=-2 color=white>");
    else document.write("<font size=-2 color=black>");
    document.write(cor+"</td>");
    }
    if (g%2==1) document.write("</tr>");
    }
    }
    document.write("</table>");
    }

    function main()
{
 var resp = document.getElementById('resp');
 var num1 = parseFloat(document.getElementById("num1").value);
 var num2 = parseFloat(document.getElementById("num2").value);
 var texto='';

 if(document.getElementById('soma').checked)
  texto = soma(num1, num2);
 if(document.getElementById('subtracao').checked)
  texto = subtracao(num1, num2);
 if(document.getElementById('multiplicacao').checked)
  texto = multiplicacao(num1, num2);
 if(document.getElementById('divisao').checked)
  texto = divisao(num1, num2);

 resp.innerHTML = texto;
}

function soma(x, y)
{
  
  return (x+y);
}

function subtracao(x, y)
{
  
  return (x-y);
}

function multiplicacao(x, y)
{
  
  return (x*y);
}

function divisao(x, y)
{
  
  return (x/y);
}

function abrirJanela(pagina, largura, altura) {

  // Definindo centro da tela
  var esquerda = (screen.width - largura)/2;
  var topo = (screen.height - altura)/2;
  // Abre a nova janela
  minhaJanela = window.open(pagina,'','height=' + altura + ', width=' + largura + ', top=' + topo + ', left=' + esquerda);
  }

  function newPopup(){
    varWindow = window.open ('popup.html', 'popup')
    }