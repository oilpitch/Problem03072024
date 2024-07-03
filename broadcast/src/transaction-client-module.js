import axios from 'axios';

const baseURL = 'https://mock-node-wgqbnxruha-as.a.run.app';

export const broadcastTransaction = async (symbol, price) => {
  try {
    const payload = {
      symbol: symbol,
      price: price,
      timestamp: Math.floor(Date.now() / 1000)
    };
    const response = await axios.post(`${baseURL}/broadcast`, payload);
    return response.data;
  } catch (error) {
    console.error('Error when call function broadcastTransaction:', error);
    throw error;
  }
}

export const checkTransactionStatus = async (tx_hash) => {
    try {
    const response = await axios.get(`${baseURL}/check/${tx_hash}`);
    return response.data;
  } catch (error) {
    console.error('Error when call function checkTransactionStatus:', error);
    throw error;
  }

}