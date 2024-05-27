import { Pressable, StyleSheet, Text, View } from "react-native";
import FONTES from "../comum/fontes/fontes";
import { TextInput } from "react-native-gesture-handler";

const estilos = StyleSheet.create({
    telaLogin: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    caixaLogin: {
        backgroundColor: '#fff',
        height: 300,
        width: 200,
        borderRadius: 8
    },
    inputStyle: {
        height: 30,
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 8

    },
    areaInputs: {
        marginHorizontal: 16
    },
    botao: {
        height: 30,
        minWidth: 40,
        marginHorizontal: 16,
        borderRadius: 8,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    areaBotao: {
        paddingTop: 20
    }
})

const TelaLogin = () => {
    return (
        <View style={estilos.telaLogin}>
            <View style={estilos.caixaLogin}>
                <View>
                    <Text style={FONTES.fonteTitulos}>
                        LOGIN
                    </Text>
                    <View style={estilos.areaInputs}>
                        <Text>User</Text>
                        <TextInput style={estilos.inputStyle} />
                    </View>
                    <View style={estilos.areaInputs}>
                        <Text>password</Text>
                        <TextInput style={estilos.inputStyle} />
                    </View>
                    <View style={estilos.areaBotao}>
                        <Pressable style={estilos.botao}>
                            <Text>ENTRAR</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </View>
    )
};

export default TelaLogin;