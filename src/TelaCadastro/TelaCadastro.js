import { Pressable, Text, View, TextInput } from "react-native";
import estilos from "../TelaLogin/TelaLoginStyle";
import ESTILOS from "../../comum/constantes/ESTILOS";
import React from "react";
import TELAS from "../../comum/constantes/TELAS";
import InputPersonalizado from '../../comum/componentes/InputPersonalizado/InputPersonalizado'
import telaCadastroStyle from "./TelaCadastroStyle";
import { HrII } from "../../comum/componentes/HorizontalRule/HorizontalRule";


const TelaCadastro = ({ navigation }) => {
    const [novoUsuario, setUNovosuario] = React.useState('');
    const [novaSenha, setNovaSenha] = React.useState('');
    const [confirmeNovaSenha, setConfirmeNovaSenha] = React.useState('');

    const cadastrarNovo = () => {
        try {
            if (!novoUsuario.trim() || !novaSenha.trim()) {
                alert('Por favor preencha os campos obrigatórios!')
            } else if (confirmeNovaSenha !== novaSenha) {
                alert('As senhas não correspondem!')
            } else {
                alert('Usuário cadastrado com sucesso!');
                navigation.goBack(TELAS.TELA_INICIO);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={telaCadastroStyle.telaCadastro}>
            <View style={telaCadastroStyle.caixaCadastro}>
                <Text style={ESTILOS.ESTILO_TITULO}>
                    CADASTRO
                </Text>
                <HrII />
                <InputPersonalizado label='E-mail:' value={novoUsuario} onChangeText={setUNovosuario} />
                <InputPersonalizado label='New Password:' secureTextEntry={true} value={novaSenha} onChangeText={setNovaSenha} />
                <InputPersonalizado label='Confirm Password:' secureTextEntry={true} value={confirmeNovaSenha} onChangeText={setConfirmeNovaSenha} />
                <View style={estilos.areaBotaoLogin}>
                    <Pressable onPress={cadastrarNovo} style={estilos.botaoLogin}>
                        <Text>CADASTRAR</Text>
                    </Pressable>
                </View>
                <View style={estilos.areaBotaoCadastro}>
                    <Pressable
                        onPress={() => navigation.goBack()} style={telaCadastroStyle.botaoBack} >
                        <Text>Voltar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
};

export default TelaCadastro;