import { StyleSheet } from "react-native";


const estilos = StyleSheet.create({
    telaLogin: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    caixaLogin: {
        backgroundColor: '#fff',
        height: 340,
        width: 270,
        borderRadius: 8
    },
    inputStyle: {
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 8

    },
    areaInputs: {
        marginHorizontal: 16
    },
    botao: {
        height: 40,
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

export default estilos;