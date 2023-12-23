import { StyleSheet, Dimensions, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#eee",
  },
  top_section: {
    backgroundColor: "tomato",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#fff",
  },
  content: {
    padding: 20,
    height: 730,
  },
  orderImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  prodName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  infoProd: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
  },
  orderName: {
    fontWeight: "600",
    fontSize: 19,
  },
  normalText: {
    fontSize: 15,
    fontWeight: "300",
  },
  processCont: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 25,
  },
  processText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
  btnAdd: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: "#c76b54",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 25,
  },
  btnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
});

export default styles;
