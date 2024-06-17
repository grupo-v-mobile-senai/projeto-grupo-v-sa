import { View, Text, StyleSheet } from 'react-native';

// régua horizontal com texto no meio
const HrI = ({ label }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, marginLeft: 16, height: 1, backgroundColor: 'black' }} />
            <View>
                <Text style={{ width: 50, textAlign: 'center' }}>{label}</Text>
            </View>
            <View style={{ flex: 1, marginRight: 16, height: 1, backgroundColor: 'black' }} />
        </View>
    )
};

const estilos = StyleSheet.create({
    container: {
      height: 1,
      backgroundColor: 'black',
      marginTop: 12,
      
    },
  });

// régua horizontal sem texto
const HrII = () => {
    return <View style={estilos.container}></View>;
};



export { HrI, HrII};