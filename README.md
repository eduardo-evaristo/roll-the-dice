# Roll The Dice

## Resumo

O teste **Roll The Dice** tem a intenção de avaliar não só o produto final, mas também todos os passos do desenvolvimento deste site (front-end e back-end) e suas funcionalidades. Serão avaliados aspectos como a lógica utilizada, a complexidade do código, a eficiência, o estilo e outros pontos importantes do desenvolvimento.

## Descrição do Projeto

O site consiste em uma única página onde o usuário poderá:

- Escolher um dado com uma determinada quantidade de lados para simular um lançamento.
- Estão disponíveis 3 modelos diferentes de dados reais (D6, D10 e D20).
- Ao clicar em um botão, o lançamento será requisitado ao back-end, informando qual dado foi escolhido.
- O back-end calculará o resultado da rolagem e retornará a resposta para o front-end.
- O front-end exibirá o resultado da rolagem para o usuário.
- Além disso, há um histórico no qual o usuário pode acompanhar suas jogadas.

## Tecnologias Utilizadas

- **Front-end**:

  - React
  - Vite
  - Tailwind CSS

- **Back-end**:

  - Node.js
  - Express

- **Linguagem**:
  - TypeScript

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone <link-do-repositorio>
   cd roll-the-dice
   ```

2. Instale as dependências do front-end e do back-end:

   ```bash
   # Front-end
   cd frontend
   npm install

   # Back-end
   cd ../backend
   npm install
   ```

3. Inicie o servidor do back-end:

   ```bash
   npm run build
   ```

4. Inicie o servidor do front-end:

   ```bash
   cd ../frontend
   npm run dev
   ```

5. Acesse o site no navegador pelo endereço fornecido pelo Vite. Geralmente será em:
   ```bash
   http://localhost:5173
   ```
