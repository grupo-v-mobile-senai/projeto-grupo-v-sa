import { useState } from "react";
import { CHAVES_STORAGE } from "../../comum/constantes/chaves_storage";
import * as ImagePicker from 'expo-image-picker'

const TelaPerfilUsuario = () => {
    const [usuarioLogado, setUsuarioLogado] = useState();
    const [image, setImage] = useState(null);

    useEffect(() => {
        const verificarSeUsuarioEstaLogado = async () => {
          const usuarioQueEstaNoStorage = await pegarItemStorage(CHAVES_STORAGE.USUARIO_LOGADO);
          setUsuarioLogado(usuarioQueEstaNoStorage);
        };

        verificarSeUsuarioEstaLogado();
        }, []);



        const pickImage = async () => {
            let result = await ImagePicker.laun
        }


export default TelaPerfilUsuario;