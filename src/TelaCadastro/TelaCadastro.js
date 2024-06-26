import { Pressable, Text, View, TextInput, ImageBackground } from "react-native";
import { estiloTelaCadastro, estiloImagem } from "../TelaCadastro/TelaCadastroStyle";
import ESTILOS from "../../comum/constantes/ESTILOS";
import React from "react";
import InputPersonalizado from '../../comum/componentes/InputPersonalizado/InputPersonalizado'
import { HrII } from "../../comum/componentes/HorizontalRule/HorizontalRule";
import TELAS from "../../comum/constantes/TELAS";
import api from "../../comum/Services/api"
import { useToast } from "native-base";

const image = { uri: 'assets/armazem-image.jpg' };

const TelaCadastro = ({ navigation }) => {
    const [novoUsuario, setNovoUsuario] = React.useState('');
    const [novoEmail, setNovoEmail] = React.useState('');
    const [novaSenha, setNovaSenha] = React.useState('');
    const [confirmeNovaSenha, setConfirmeNovaSenha] = React.useState('');


    const cadastrarNovo = async () => {
    const toast = useToast()
        try {
            if (!novoUsuario.trim() || !novaSenha.trim()) {
                toast.show({
                    description: 'Por favor preencha os campos obrigatórios!',
                    plcacement: 'top'
                })
            } else if (confirmeNovaSenha !== novaSenha) {
                toast.show({
                    description: 'As senhas não correspondem!',
                    plcacement: ''
                })
            } else {
                toast.show({
                    description: 'Usuário cadastrado com sucesso!',
                    plcacement: 'top'
                })
                alert('Usuário cadastrado com sucesso!');
                const usuarios = {
                    nome: novoUsuario,
                    email: novoEmail,
                    senha: novaSenha,
                };
                await api.post('/usuarios', usuarios)
                navigation.goBack(TELAS.TELA_LOGIN);
            }
        } catch (error) {
            console.log(error);
        }
    }
 
    return (
        <View style={estiloTelaCadastro.container}>
            <View style={estiloImagem.containerImagem}>
                <ImageBackground source={image} resizeMode="cover" style={estiloImagem.image}>
                    <View style={estiloTelaCadastro.caixaCadastro}>
                        <Text style={ESTILOS.ESTILO_TITULO}>
                            CADASTRO
                        </Text>
                        <HrII />
                        <InputPersonalizado label='Nome:' value={novoUsuario} onChangeText={setNovoUsuario} />
                        <InputPersonalizado label='Novo E-mail:' value={novoEmail} onChangeText={setNovoEmail} />
                        <InputPersonalizado label='Nova Senha:' secureTextEntry={true} value={novaSenha} onChangeText={setNovaSenha} />
                        <InputPersonalizado label='Confirme Senha:' secureTextEntry={true} value={confirmeNovaSenha} onChangeText={setConfirmeNovaSenha} />
                        <View style={estiloTelaCadastro.areaBotaoCadastro}>
                            <Pressable onPress={cadastrarNovo} style={estiloTelaCadastro.botaoCadastro}>
                                <Text>CADASTRAR</Text>
                            </Pressable>
                        </View>
                        <View style={estiloTelaCadastro.areaBotaoCadastro}>
                            <Pressable
                                onPress={() => navigation.goBack()} style={estiloTelaCadastro.botaoBack} >
                                <Text>Voltar</Text>
                            </Pressable>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
};

export default TelaCadastro;