1.  ![CAPITAL CODE-LOGO](http://capitalcode.com.br/spacecapital.jpg)

2.  # [Capital Code](http://capitalcode.com.br)- Space Capital, mostra a distância dos planetas em relação ao sol de uma forma diferente! #

3.  ![VERSÃO DO SW](https://img.shields.io/badge/Spacel%20Capital--%20version-v.1.1.7-blue.svg)

4. ![Curso Git](https://img.shields.io/badge/Curso%20Git-01-lightgrey.svg)
6. 

7.  O **Space  Capital**  interação com os planetas, com um simples toque na superfície do  
8.  planeta você consegue ver a sua distância em km até o sol.

9.  O Space  Capital foi feito totalmente com Javascript e Jquery, apresentando assim o mais alto desempenho 
10.  no  Front-end.

11.  ## Interação com o usuário

12.  O evento do clique, aciona a função que seta as informações sobre o planeta:

13.    <div class="planet p-1" onclick="setDistancia('90')">

14.  ##  Número com animação

15.  Ao clicar no botão, a função "setDistancia"  é chamada e uma animação do contador é realizada dessa forma:

16.    function setDistancia($distancia){
17.   $('#distancia').animateNumber({ number: $distancia })
18.    }

19.  ## Plugin para contador

20.    -  [jquery-animateNumber](https://github.com/aishek/jquery-animateNumber)

21.  Para mais informações acesse [a plataforma](http://capitalcode.com.br).
