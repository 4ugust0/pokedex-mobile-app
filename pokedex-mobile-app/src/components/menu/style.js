import PalleteColor from "../../style/pallete";

const menuComponentStyle = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: PalleteColor.brandPrimary,
    paddingTop: 55,
    paddingBottom: 4,
    padding: "2%",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
  },
  Image: {
    logo: {
      width: 100,
      height: 30,
    },
  },
  line: {
    container: {
      width: 40,
      display: "flex",
      flexDirection: "column",
      gap: 3.5,
    },
    hrs: {
      width: "100%",
      height: 5,
      backgroundColor: "black",
      borderRadius: 300,
    },
  },
};

export default menuComponentStyle;
