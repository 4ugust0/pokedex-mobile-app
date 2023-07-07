import { Text, View } from "react-native";

const Footer = () => (
  <View
    style={{
        marginTop: 30,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      width: "100%",
      padding: 10,
    }}
  >
    <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}>
      Dev Augusto
    </Text>
    <Text style={{ fontSize: 18, textAlign: "center" }}>
      https://github.com/4ugust0
    </Text>
  </View>
);

export default Footer;
