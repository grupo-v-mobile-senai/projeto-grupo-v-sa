import { Pressable, Text, View, TextInput } from "react-native";
import FONTES from "../../comum/fontes/fontes";

import React from "react";
import TELAS from "../../comum/telas";
import estilos from "./TelaLoginStyle";


const TelaLogin = (props) => {
    const [usuario, setUsuario] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const Entrar = () => {
           props.navigation.navigate(TELAS.TELA_INICIO);
    }

return (
    <View style={estilos.telaLogin}>
        <View style={estilos.caixaLogin}>
            <View>
                <Text style={FONTES.fonteTitulos}>
                    LOGIN
                </Text>
                <View style={estilos.areaInputs}>
                    <Text>User</Text>
                    <TextInput
                        value={usuario}
                        onChangeText={setUsuario}
                        style={estilos.inputStyle} />
                </View>
                <View style={estilos.areaInputs}>
                    <Text>Password</Text>
                    <TextInput
                        textContentType="password"
                        value={senha}
                        onChangeText={setSenha}
                        style={estilos.inputStyle} />
                </View>
                <View style={estilos.areaBotao}>
                    <Pressable onPress={Entrar} style={estilos.botao}>
                        <Text>ENTRAR</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </View>
)
};

export default TelaLogin;