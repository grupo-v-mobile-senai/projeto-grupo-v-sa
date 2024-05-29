import { Text, View, StyleSheet, ImageBackground } from "react-native";

const image = { uri: 'assets/armazem-image.jpg' };


const Home = () => {
    
        <View style={estiloImagem.container}>
            <ImageBackground source={image} resizeMode="cover" style={estiloImagem.image}>
                <Text style={estiloImagem.text}></Text>
            </ImageBackground>
        </View>
    
};

// const estiloImagem = StyleSheet.create({
//     container: {
//         // flex: 1,
//     },
//     image: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     text: {
//         color: 'white',
//         fontSize: 42,
//         lineHeight: 84,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         backgroundColor: '#000000c0',
//     },
// });

export default Home;