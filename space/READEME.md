# [Capital Code](http://capitalcode.com.br)- Space Capital, mostra a distância dos planetas em relação ao sol de uma forma diferente! #

![VERSÃO DO SW](https://img.shields.io/badge/Spacel%20Capital--%20version-v.1.1.7-blue.svg)

![Curso Git](https://img.shields.io/badge/Curso%20Git-01-lightgrey.svg)
 
O **Space  Capital**  mostra a interação com os planetas, com um simples toque na superfície do  
planeta você consegue ver a sua distância em km até o sol.

O Space  Capital foi feito totalmente com Javascript e Jquery, apresentando assim o mais alto desempenho no  Front-end.

## Interação com o usuário

O evento do clique, aciona a função que seta as informações sobre o planeta:

```html
<div class="planet p-1" onclick="setDistancia('90')">

##  Número com animação

-  Ao clicar no botão, a função "setDistancia"  é chamada e uma animação do contador é realizada dessa forma:


    function setDistancia($distancia){
        $('#distancia').animateNumber({ number: $distancia })
    }

## Plugin para contador

-  [jquery-animateNumber](https://github.com/aishek/jquery-animateNumber)

Para mais informações acesse [a plataforma](http://capitalcode.com.br).
