import axios, { AxiosInstance } from "axios";

const besuUrl: string = "http://localhost:8545"; // URL do nó Hyperledger Besu
const axiosInstance: AxiosInstance = axios.create({
  baseURL: besuUrl,
  headers: { "Content-Type": "application/json" },
});

export const connectToBesu = async (): Promise<void> => {
  try {
    const response = await axiosInstance.post("", {
      jsonrpc: "2.0",
      method: "net_listening",
      params: [],
      id: 1,
    });

    if (response.data.result) {
      console.log("Conectado ao nó Hyperledger Besu com sucesso!");
    } else {
      console.error("Falha ao conectar ao nó Hyperledger Besu.");
    }
  } catch (error) {
    console.error("Erro ao conectar ao nó Hyperledger Besu:", error);
  }
};

export const sendTransaction = async (
  from: string,
  to: string,
  value: number
): Promise<any> => {
  const transaction = {
    from,
    to,
    value: `0x${(value * 1e18).toString(16)}`, // Convertendo para Wei em hexadecimal
    gas: "0x1e8480", // 2000000 em hexadecimal
  };

  try {
    const response = await axiosInstance.post("", {
      jsonrpc: "2.0",
      method: "eth_sendTransaction",
      params: [transaction],
      id: 1,
    });

    if (response.data.result) {
      console.log("Transação enviada com sucesso:", response.data.result);
      return response.data.result;
    } else {
      console.error("Erro ao enviar transação:", response.data.error);
      throw new Error(response.data.error.message);
    }
  } catch (error) {
    console.error("Erro ao enviar transação:", error);
    throw error;
  }
};
