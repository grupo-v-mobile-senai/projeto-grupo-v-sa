import { StyleSheet } from "react-native";

    export const estiloTelaLogin = StyleSheet.create({
        container: {
            flex: 1,

        },
        caixaLogin: {
            display: 'flex',
            backgroundColor: '#fff',
            height: 400,
            width: 270,
            borderRadius: 8,
            opacity: 0.9
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
        },
    })
    export const estiloImagem = StyleSheet.create({
        containerImagem: {
            flex: 1
        },
        image: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
    });



