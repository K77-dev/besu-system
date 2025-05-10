import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.26",
  paths: {
    sources: "./src/blockchain/contracts", // Caminho para os contratos
    artifacts: "./artifacts", // Diretório onde os artefatos serão gerados
  },
  networks: {
    besu: {
      url: "http://localhost:8545",
      chainId: 1337,
      accounts: [
        "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63", // Substitua pela sua chave privada
      ],
    },
  },
};

export default config;
