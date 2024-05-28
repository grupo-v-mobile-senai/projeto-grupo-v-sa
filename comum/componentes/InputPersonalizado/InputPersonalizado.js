import { Text, TextInput, View } from "react-native";
import inputPersonalizadoStyle from "./InputPersonalizadoStyle";

const InputPersonalizado = ({ label, style, ...props }) => {
    return (<View style={inputPersonalizadoStyle.inputArea}>
        <Text>{label}</Text>
        <TextInput style={[inputPersonalizadoStyle.inputStyle, style]} {...props} />
    </View>
    )
};

export default InputPersonalizado;