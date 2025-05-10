interface Record {
  [key: string]: any; // Defina os campos esperados do registro, se possível
}

interface ResponseFormat<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export const validateRecord = (record: Record): void => {
  if (!record || typeof record !== "object") {
    throw new Error("Invalid record: must be a non-null object");
  }
  // Adicione mais lógica de validação conforme necessário
};

export const formatResponse = <T>(data: T): ResponseFormat<T> => {
  return {
    success: true,
    data: data,
  };
};

export const handleError = (error: Error): ResponseFormat<null> => {
  return {
    success: false,
    message: error.message,
  };
};
