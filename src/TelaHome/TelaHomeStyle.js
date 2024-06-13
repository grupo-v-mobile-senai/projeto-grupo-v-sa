import { StyleSheet } from 'react-native';

const estiloHome = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 48
    },
    areaBotao: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 24,
        paddingTop: 40

    },
    textoTituloTela: {
        fontSize: 30,
    },
    TituloTela: {
        height: 54,
        width: '100%',
        // paddingTop: 24,
        paddingLeft: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    botaoAdicionarCategoria: {
        height: 24,
        fontSize: 18,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 24,
        borderColor: 'black',
        backgroundColor: '#87cefa',
        borderWidth: 1,
        borderRadius: '50%',
        marginLeft: '40%',
        marginRight: 16
    },
    conteudoBotaoAdicionar: {
        fontSize: 24
    }

})

export default estiloHome;