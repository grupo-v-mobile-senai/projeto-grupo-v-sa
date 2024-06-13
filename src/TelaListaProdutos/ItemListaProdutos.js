import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';



const ItemListaProdutos = (props) => {
    const navigation = useNavigation()

    return (
        <View>
            {/* <Text>{props.produto.nome}</Text>
            <Text>{props.produto.estoque}</Text> */}
        </View>
    )
};

export default ItemListaProdutos;