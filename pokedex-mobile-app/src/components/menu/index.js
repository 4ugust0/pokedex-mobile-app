import { Pressable, View } from "react-native";
import menuComponentStyle from "./style";
import Logotipo from "../../../images/svg/logo";

const MenuComponent = () => (
  <View style={menuComponentStyle.container}>
    <Logotipo style={{ marginTop: 5 }} width={90} height={40} />
    <Pressable style={menuComponentStyle.line.container}>
      <View style={menuComponentStyle.line.hrs}></View>
      <View style={menuComponentStyle.line.hrs}></View>
      <View style={menuComponentStyle.line.hrs}></View>
      {/* line */}
    </Pressable>
    
    {/* hamburguer-button */}
  </View>
);

export default MenuComponent;
