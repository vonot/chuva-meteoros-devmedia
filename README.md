<h1 align="center">:comet: Chuva de Meteoros DevMedia</h1>

<p align="center" id="sobre">Minha implementação do <a href='https://www.devmedia.com.br/javascript/Construindo-projeto-completo'>Projeto Chuva de Meteoros</a> proposto pela <a href='https://github.com/DevMedia'>@DevMedia</a> ao final do curso de JavaScript.</p>

<p align="center">
<a href='https://www.linkedin.com/in/vonot/'><img src="https://img.shields.io/static/v1?label=LinkedIn&message=/in/vonot&color=0A66C2&style=flat&logo=linkedin" title="/in/vonot/"/></a>
<img src="https://img.shields.io/static/v1?label=JavaScript&message=ES6&color=F7DF1E&style=flat&logo=javascript"/>
<img src="https://img.shields.io/static/v1?label=NodeJS&message=14.15.5&color=339933&style=flat&logo=node.js" />
<img src="https://img.shields.io/static/v1?label=BabelJS&message=7.12.16&color=f5da55&style=flat&logo=babel"/>
<img src="https://img.shields.io/static/v1?label=Yarn&message=7.12.16&color=2C8EBB&style=flat&logo=yarn"/>
</p>

![](img/1.gif)

<h2 id="tabela-conteudo">:book: Tabela de Conteudo</h2>

<ul>
  <li><a href="#sobre">Sobre</a></li>
  <li><a href="#tabela-conteudo">Tabela de Conteudo<a></li>
   <li><a href="#funcionalidades">Funcionalidades</a>
    <ul>
      <li><a href="#ocorrendo">Chuvas de Meteoros Ocorrendo</a></li>
      <li><a href="#proximas">Chuvas de Meteoros Próximas</a></li>
     </ul>
   </li>
  <li>Como Rodar
   <ul>
      <li>Pré Requisitos</li>
      <li>Clonando Repositório</li>
      <li>Iniciando Aplicação</li>
    </ul>
  </li>
</ul>

<h2 id="funcionalidades">:thinking: Funcionalidades</h2>
<p>
  O sistema desenvolvido em módulos recebe um arquivo .JS externo com um array de objetos contendo informações sobre chuvas de meteoros:
  
  ```js
  const chuva de meteoros = [
  {nome: 'meteoro', inicio: '01/28', fim: '02/21', pico: 'Fev 8', ascensao: 210, declinacao: -59, velocidade: 56, thz: '6', intensidade: 'Média'},
  ....
  ];
  ```
  
  O algoritimo deve tratar esses dados e apresenta-los ao usuario na forma de duas listas diferentes:
  * <strong>Chuvas de Meteoros Ocorrendo</strong> e
  * <strong>Chuvas de Meteoros Próximas<strong>
</p>
  
<h3 id="ocorrendo">Chuvas de Meteoros Ocorrendo</h3>

Para criarmos a lista de Chuvas Ocorrendo é necessário capturar a data do computador do usuario e verificarmos se existe alguma chuva de meteoro ocorrendo naquele dia.

Caso houver algum, devemos imprimir o <strong> nome do meteoro </strong>, a <strong>intensidade da chuva </strong>, o <strong>hemisfério que esta ocorrendo o evento </strong> e o periodo de duração do fenômeno</strong>.

Não podemos esquecer também de converter o data para o formato de data local do usuário, e considerar a possibilidade de não estar ocorrendo nenhuma chuva.

![](img/3.gif)
<h3 id="proximas">Chuvas de Meteoros Próximas</h3>
<p>Condição para a lista de meteoros proximos</p>

<h2>Como Rodar</h2>
<h3>Requisitos</h3>
Para excutar o projeto é necessário ter instalado no seu computador o <a href="https://nodejs.org/en/" target"_blank"><strong>NodeJS</strong></a> e o <a href="https://yarnpkg.com/" target="_blank"><strong>YarnPKG</strong></a>
<ul>
  <li><a href="#linux">Linux (Ubuntu/Debian)</a></li>
  <li>MAC</li>
  <li>Windows</li>
</ul>

<strong>Se ocorrer algum problema durante a instalação recomendo procurar ajuda na documentação dos projetos.</strong>

<h4 id="linux">Linux</h4>

```sh
# Utilizando o Ubuntu
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs
```
