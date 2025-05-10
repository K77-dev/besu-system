<<<<<<< HEAD
# besu-system
=======
# Hyperledger Besu Table Management System

Este projeto é um sistema para gerenciar registros em uma tabela utilizando Hyperledger Besu. Ele permite a criação, leitura, atualização e exclusão de registros através de uma API.

## Estrutura do Projeto

- **src/api**: Contém a lógica da API.
  - **index.ts**: Ponto de entrada da API, configura o servidor Express.
  - **routes/tableRoutes.ts**: Define as rotas para manipulação de registros.
  - **controllers/tableController.ts**: Contém a classe `TableController` com métodos para gerenciar registros.

- **src/blockchain**: Contém a lógica de interação com a blockchain.
  - **besuClient.ts**: Configura o cliente Hyperledger Besu.
  - **contracts/TableContract.sol**: Contrato inteligente que define a estrutura da tabela.

- **src/utils**: Contém funções utilitárias.
  - **helpers.ts**: Funções para validações e formatações de dados.

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:
   ```
   cd besu-system
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar o servidor da API, execute o seguinte comando:
```
npm start
```

As rotas da API estarão disponíveis em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
>>>>>>> c145309 (Projeto inicial Besu System)
