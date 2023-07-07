import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import stylePokeHome from "./style";
import PalleteColor from "../../style/pallete";
import MenuComponent from "../../components/menu";
import Footer from "../../components/footer";

const PokeHome = () => {
  return (
    <ScrollView style={stylePokeHome.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <MenuComponent />
        <Image
          style={stylePokeHome.ImageMain}
          source={require("../../../images/banners/bannerInitial.png")}
        />
        <Text
          style={{
            fontSize: 42,
            textAlign: "center",
            fontWeight: 300,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Find</Text> all your {"\n"}{" "}
          favorite {"\n"} <Text style={{ fontWeight: "bold" }}>Pokemon</Text>
        </Text>
        <Text
          style={{
            width: 322.13,
            marginTop: 10,
            fontSize: 24,
            textAlign: "center",
          }}
        >
          You can know the type of Pokemon, its strengths, disadvantages and
          abilities
        </Text>

        <Pressable style={stylePokeHome.button.seePokemons}>
          <Text style={stylePokeHome.button.seePokemons.title}>
            See pokemons
          </Text>
        </Pressable>

        <Footer />
        <StatusBar backgroundColor={PalleteColor.brandPrimary} />
      </View>
    </ScrollView>
  );
};

export default PokeHome;
