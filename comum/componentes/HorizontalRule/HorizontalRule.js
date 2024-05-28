import { View, Text } from 'react-native';

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

// régua horizontal sem texto
const HrII = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 8 }}>
            <View style={{ flex: 1, marginLeft: 16, height: 0.8, backgroundColor: 'black' }} />
            <View>
            </View>
            <View style={{ flex: 1, marginRight: 16, height: 0.8, backgroundColor: 'black' }} />
        </View>
    )
};



export { HrI, HrII};