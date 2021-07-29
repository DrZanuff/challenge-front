[![Netlify Status](https://api.netlify.com/api/v1/badges/8875a84a-5a79-4463-9725-4fde99394f68/deploy-status)](https://app.netlify.com/sites/carrinho-de-compras-desafio-e-plus/deploys)

Este é uma simples interface de um carrinho de compras criado para o desafio da agência E-Plus.



# Projeto Eplus Challenge
![alt text](https://github.com/DrZanuff/challenge-front/blob/master/public/docs/eplusCart1.png?raw=true)

## Tecnologias usadas

- Next.JS
- ReactJS
- Typescript
- SCSS
- [react-animated-css](https://www.npmjs.com/package/react-animated-css)

## Como usar

Faça um clone desse repositório e rode o comando yarn ou npm para obter as dependências do projeto.
```bash
yarn
```
Execute o seguinte comando no terminal para iniciar o servidor local do projeto.
```bash
yarn dev
```

O Projeto será executado na porta 3000 e será acessível através da URL http://localhost:3000

## Demonstração
Link para a Aplicação Live:
https://carrinho-de-compras-desafio-e-plus.netlify.app/


## Funcionalidades

#### Header responsivo
O maior foco da responsividade foi no Header da página. Este componente possui um menu no centro, então resolvi ao mudar a resolução esconder as opções e colocá-lo em um botão mobile ao lado logo:

![alt text](https://github.com/DrZanuff/challenge-front/blob/master/public/docs/eplusCart2.gif?raw=true)


Usei algumas animações no Header usando CSS para exibir o menu mobile e um efeito de hover nas opções do menu, isto oferece uma melhor experiência para o usuários.

![alt text](https://github.com/DrZanuff/challenge-front/blob/master/public/docs/eplusCart3.gif?raw=true)

*Modo Desktop:

![alt text](https://github.com/DrZanuff/challenge-front/blob/master/public/docs/eplusCart4.gif?raw=true)


#### Carrinho de Compras:
O maior desafio inicialmente foi posicionar o carrinho de compras sempre próximo ao botão do carrinho no Header. Inicialmente usei animações no CSS para fazer o carrinho surgir, mas resolvi usar uma biblioteca React para isso, chamada react-animated-css (Link), pois assim precisava apenas passar para o componente o estado de exibição do carrinho, definir os tipos de animações e pronto.

O botão do carrinho possui um estado para exibir e esconder o componente Cart e então deixando o react-animated-css fazer seu trabalho. Também coloquei alguns efeitos de hover sobre o botão Finalizar Compra . 

![alt text](https://github.com/DrZanuff/challenge-front/blob/master/public/docs/eplusCart5.gif?raw=true)


Para exibir todos os itens do carrinho, utilizei a função map e para calcular o total a função reduce.

*Map:

![alt text](https://github.com/DrZanuff/challenge-front/blob/master/public/docs/eplusCart6.png?raw=true)

*Reduce:

![alt text](https://github.com/DrZanuff/challenge-front/blob/master/public/docs/eplusCart7.png?raw=true)

#### Responsividade
Fiz um trabalho bem minucioso para deixar a página responsiva em todas resoluções. Atualmente estou satisfeito com o resultado, mas acredito que com mais tempo é possível melhorar mais ainda esta responsividade.



![alt text](https://github.com/DrZanuff/challenge-front/blob/master/public/docs/eplusCart9.gif?raw=true)


## O porquê das tecnologias

#### Next.js
Faz pouco tempo que comecei a usar o Next.js mas já posso ver as enormes vantagens que ele traz out-of-box, isso tirando as funcionalidades de Server Side Rendering e Static Site Generator, imprescindíveis para o SEO do Google.

#### Typescript
O Typescript traz uma carga um pouco maior para o desenvolvimento, mas compensa ao longo prazo, para projetos maiores e trabalhando com equipes. A tipagem dele faz muita diferença e depois que você se acostuma é difícil ficar sem. Qaundo voce está iniciando com Typescript, pode ser um pouco trabalhoso acertar os formatos dos objetos, mas vale cada esforço dominar essa linguagem.

#### SCSS
Outra tecnologia que melhora a vida do desenvolvedor. Trabalhar com CSS em cascata e funcionalidades de escopo de estilo junto com Next.js acelera e simplica a estilição dos componentes. 
