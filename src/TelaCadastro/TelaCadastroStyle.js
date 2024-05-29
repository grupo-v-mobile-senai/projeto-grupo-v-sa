import { StyleSheet } from "react-native"

const estiloImagem = StyleSheet.create({
    containerImagem: {
        flex: 1
    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    botaoCadastro: {
        height: 40,
        minWidth: 40,
        marginHorizontal: 16,
        borderRadius: 8,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    areaBotaoCadastro: {
        paddingTop: 20,
        paddingBottom: 4
    },
    caixaCadastro: {
        // flex: 1,
        display: 'flex',
        backgroundColor: '#fff',
        height: 400,
        width: 270,
        borderRadius: 8
    },
    botaoBack: {
        alignItems: 'center',
    },
});

export { estilos as telaCadastroStyle, estiloImagem };