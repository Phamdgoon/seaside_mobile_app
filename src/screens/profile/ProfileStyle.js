import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        gap: 20,
    },
    itemContainer: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#45849f",
        marginTop: 20,
    },
    itemTitle: {
        color: "#fff",
    },
    accountName: {
        fontSize: 20,
    },
    noImageText: {
        marginTop: 100,
    },
});

export default styles;
