import { StyleSheet } from "react-native";


const estilos = StyleSheet.create({
    telaLogin: {
        flex: 1,
        backgroundColor: '#ceecef',
        alignItems: 'center',
        justifyContent: 'center'
    },
    caixaLogin: {
        backgroundColor: '#fff',
        height: 340,
        width: 270,
        borderRadius: 8
    },
    botaoLogin: {
        height: 40,
        minWidth: 40,
        marginHorizontal: 16,
        borderRadius: 8,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    areaBotaoLogin: {
        paddingTop: 20,
        paddingBottom: 4
    },
    botaoCadastro: {
        height: 40,
        minWidth: 40,
        backgroundColor: '#cbdad5',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        borderRadius: 8,
    },
    areaBotaoCadastro: {
        paddingTop: 8,
    }
})

export default estilos;