import axios from 'axios';
import { CHAVES_STORAGE } from '../constantes/chaves_storage';
import { pegarItemStorage } from './serviceStorage';

let instancia = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'X-Custom-Header': 'foobar' },
});

  instancia.interceptors.request.use(async (config) => {
    const usuarioLogado = await pegarItemStorage(CHAVES_STORAGE.USUARIO_LOGADO);
    if (usuarioLogado) {
      config.headers['x-usuario-logado'] = usuarioLogado.id;
    }
  
    return config;
});

export default instancia;