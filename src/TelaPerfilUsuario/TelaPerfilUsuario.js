import { useState, useEffect } from "react";
import { CHAVES_STORAGE } from "../../comum/constantes/chaves_storage";
import * as ImagePicker from 'expo-image-picker'
import { limparStorage, pegarItemStorage } from "../../comum/Services/serviceStorage";
import TELAS from "../../comum/constantes/TELAS";
import { Pressable, View, Text, Image } from "react-native";
import estilos from "./TelaPerfilUsuarioStyle";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado.js/BotaoCustomizado";


const TelaPerfilUsuario = (props) => {
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
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const sair = () => {
        limparStorage(CHAVES_STORAGE.USUARIO_LOGADO);
        props.navigation.navigate(TELAS.TELA_LOGIN)
    };

    return (
        <View style={estilos.container}>
            {usuarioLogado && (
                <>
                    <View style={estilos.containerAvatar}>
                        <Pressable onPress={pickImage}>
                            <View style={estilos.avatar}>
                                {!image && <Text style={{ fontSize: 30 }}>{usuarioLogado.nome[0]}</Text>}
                                {image && <Image source={{ uri: image }} style={estilos.imagem} />}
                            </View>
                        </Pressable>
                    </View>

                    <View style={{gap: 16}}>

                    <CampoTextoCustomizado value={usuarioLogado?.nome}/>
                    <CampoTextoCustomizado value={usuarioLogado?.email}/>

                    <BotaoCustomizado cor='primaria'>Salvar</BotaoCustomizado>
                    <BotaoCustomizado onPress={sair}>Sair</BotaoCustomizado>
                    </View>

                </>
            )}
        </View>
    )
}

export default TelaPerfilUsuario;