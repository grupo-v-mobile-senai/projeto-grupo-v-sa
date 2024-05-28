import { Pressable, Text, View, TextInput } from "react-native";
import React from "react";
import ESTILOS from "../../comum/constantes/ESTILOS";
import TELAS from "../../comum/constantes/TELAS";
import estilos from "./TelaLoginStyle";
import InputPersonalizado from "../../comum/componentes/InputPersonalizado/InputPersonalizado";
import { HrI, HrII } from "../../comum/componentes/HorizontalRule/HorizontalRule";

import FontAwesome from '@expo/vector-icons/FontAwesome';



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
        <View style={estilos.telaLogin}>
            <View style={estilos.caixaLogin}>
                <Text style={ESTILOS.ESTILO_TITULO}>
                    LOGIN
                </Text>
                <HrII />
                <InputPersonalizado label='User:' value={usuario} onChangeText={setUsuario} />
                <InputPersonalizado label='Password:' secureTextEntry={true} value={senha} onChangeText={setSenha} />
                <View style={estilos.areaBotaoLogin}>
                    <Pressable onPress={Entrar} style={estilos.botaoLogin}>
                        <Text>ENTRAR</Text>
                    </Pressable>
                </View>
                <HrI label='OU'/>
                <View style={estilos.areaBotaoCadastro}>
                    <Pressable onPress={AbrirTelaCadastro} style={estilos.botaoCadastro}>
                        <Text>CADASTRAR NOVO</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
};

export default TelaLogin;