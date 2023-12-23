import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        color: "tomato",
    },
    titleDetail: {
        fontSize: 15,
        marginLeft: 20,
    },
    orderItem: {
        borderWidth: 1,
        // height: 100,
        marginHorizontal: 20,
        marginVertical: 20,
    },

    orderItemHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        padding: 10,
        // alignItems: "center",
    },
    nameProduct: {
        fontWeight: "500",
        fontSize: 15,
    },
    status: {
        fontSize: 15,
        fontWeight: "500",
        color: "tomato",
    },
    img: {
        width: 100,
        height: 100,
        marginLeft: 20,
        marginBottom: 10,
    },
    orderItemContent: {
        flexDirection: "row",
    },
    productInfo: {
        gap: 5,
        marginLeft: 10,
    },
    loading: {
        flexDirection: "row",
        marginTop: 30,
        gap: 20,
    },
    header: {
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
        marginLeft: 20,
        marginTop: 50,
    },
});

export default styles;
