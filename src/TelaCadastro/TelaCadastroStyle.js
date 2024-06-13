import { StyleSheet } from "react-native"

export const estiloImagem = StyleSheet.create({
    containerImagem: {
        flex: 1
    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const estiloTelaCadastro = StyleSheet.create({
    container: {
        flex: 1
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
        height: 415,
        width: 270,
        borderRadius: 8,
        // opacity: 0.9
    },
    botaoBack: {
        alignItems: 'center',
    },
});