import { Image, Pressable, Text, View } from "react-native";
import styleAppHome from "./style";

const AppHome = ({navigation}) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Image
      style={styleAppHome.image}
      source={require("../../../images/developer/devaugusto.jpeg")}
    />
    <Text style={styleAppHome.Text}>
      Bem vindo ao meu primeiro projeto mobile!
    </Text>
    <Pressable onPress={() => navigation.navigate("PokeHome")} style={styleAppHome.Button.irParaOProjeto}>
      <Text style={styleAppHome.Button.irParaOProjeto.Title}>
        Ir para o projeto
      </Text>
    </Pressable>
  </View>
);

export default AppHome;
