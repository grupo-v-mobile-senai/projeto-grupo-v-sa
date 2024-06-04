import { Pressable, Text, View, ImageBackground } from "react-native";
import React from "react";
import ESTILOS from "../../comum/constantes/ESTILOS";
import TELAS from "../../comum/constantes/TELAS";
import InputPersonalizado from "../../comum/componentes/InputPersonalizado/InputPersonalizado";
import { HrI, HrII } from "../../comum/componentes/HorizontalRule/HorizontalRule";
import {estiloTelaLogin, estiloImagem} from '../TelaLogin/TelaLoginStyle';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const image = { uri: 'assets/armazem-image.jpg' };

const TelaLogin = (props) => {
    const [usuario, setUsuario] = React.useState('');
    const [senha, setSenha] = React.useState('');




    const Entrar = () => {
        try {
            if (!usuario.trim() || !senha.trim()) {
                alert('Por favor preencha os campos obrigatórios!')
            } else {
                props.navigation.navigate(TELAS.TELA_INICIO);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const AbrirTelaCadastro = () => {
        props.navigation.navigate(TELAS.TELA_CADASTRO)
    }

    return (

        <View style={estiloTelaLogin.container}>
            <View style={estiloImagem.containerImagem}>
                <ImageBackground source={image} resizeMode="cover" style={estiloImagem.image}>
                    <View style={estiloTelaLogin.caixaLogin}>
                        <Text style={ESTILOS.ESTILO_TITULO}>
                            LOGIN
                        </Text>
                        <HrII />
                        <InputPersonalizado label='User:' value={usuario} onChangeText={setUsuario} />
                        <InputPersonalizado label='Password:' secureTextEntry={true} value={senha} onChangeText={setSenha} />
                        <View style={estiloTelaLogin.areaBotaoLogin}>
                            <Pressable onPress={Entrar} style={estiloTelaLogin.botaoLogin}>
                                <Text>ENTRAR</Text>
                            </Pressable>
                        </View>
                        <HrI label='OU' />
                        <View style={estiloTelaLogin.areaBotaoCadastro}>
                            <Pressable onPress={AbrirTelaCadastro} style={estiloTelaLogin.botaoCadastro}>
                                <Text>CADASTRAR NOVO</Text>
                            </Pressable>
                        </View>
                    </View>
                </ImageBackground>
            </View>

        </View>
    )
};

export default TelaLogin;