# Desafio: Classificação de Nível de Jogador

Este repositório contém um desafio de JavaScript para classificar o nível de um jogador com base em seu saldo de vitórias em partidas ranqueadas. O objetivo é praticar lógica de programação e estrutura condicional em JS.

## 🚀 Desafio
Crie uma função que receba como parâmetro a quantidade de vitórias e derrotas de um jogador. Em seguida, calcule o saldo de partidas ranqueadas usando a fórmula:

``` js
    Saldo_de_Rankeadas = Vitórias - Derrotas
```

Com base no número de vitórias, o jogador será classificado conforme a seguinte tabela:

|  Vitórias  |  Nível  |
|------------|---------|
|Menor que 10|  Ferro  |
|  11  - 20  |  Bronze |
|  21  - 50  |  Prata  |
|  51  - 80  |  Ouro   |
|  81  - 90  | Diamante|
|  91 - 100  | Lendário|
|    101+    | Imortal |

## 📌 Requisitos
* A função deve receber dois parâmetros: número de vitórias e derrotas.
* O saldo de ranqueadas deve ser calculado subtraindo as derrotas das vitórias.
* O código deve determinar o nível do jogador com base na quantidade de vitórias.

## 💡 Exemplo de Entrada e Saída
<b>Entrada:</b>

``` js
    const vitorias = 75;
    const derrotas = 25;
```
<b>Saída:</b>

``` js
    O Herói tem saldo de 50 está no nível de Prata.
```

## 🔧 Como executar o desafio
Clone este repositório: ```git clone https://github.com/GeCorreia4/desafio-rankeadas.git```

Acesse o diretório do projeto: ```cd desafio-rankeadas```

Execute o código em um ambiente Node.js: ```node desafio.js```

## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usar e modificar! 🚀
