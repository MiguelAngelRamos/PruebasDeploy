import { API_URL } from '../utils/urls';
import axios from 'axios';

export const indicadoresEconomicos = async (query) => {
  const indicador = await axios.get(`${API_URL}/${query}`); // No hace falta transformala a json.
  return indicador.data
};