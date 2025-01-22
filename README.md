## Space Capital: Distância dos planetas com um Toque!

**Mostrando a distância dos planetas em relação ao Sol de uma forma interativa.**

![VERSÃO DO SW]( https://img.shields.io/badge/Space_Code_Versão-1.1.4-blue.svg)

![Curso Git](https://img.shields.io/badge/Curso%20Git-01-lightgrey.svg)

### Sobre o Projeto
O Space Capital é um projeto web que permite aos usuários explorarem o sistema solar de forma intuitiva. Com um simples clique em um planeta, você descobre a sua distância em Km em relação ao Sol, acompanhada de uma animação suave e envolvente.

### Como funciona
Ao clicar em um planeta, a função `setDistancia` é acionada, iniciando uma animação que atualiza o valor da distância em tempo real. A animação é criada utilizando o plugin jQuery animateNumber, proporcionando uma experiência visualmente agradável.

```javascript
function setDistancia($distancia) {
    $('#distancia').animateNumber({ number: $distancia });
