import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./OrderPlacedStyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { handleGetAllOrdersBuyer } from "../../services/Service";
const OrderPlaced = ({ navigation }) => {
    const [listOrders, setListOrders] = useState([]);
    const [loadingOrders, setloadingOrders] = useState(false);
    const userInfoFromRedux = useSelector((state) => state);

    let { userName } = userInfoFromRedux;
    const getAllOrderBuyer = async () => {
        setloadingOrders(true);
        const res = await handleGetAllOrdersBuyer(userName);
        setListOrders(res.data.DT);
        setloadingOrders(false);
    };
    useEffect(() => {
        getAllOrderBuyer();
    }, [userName]);
    const handleBack = () => {
        navigation.navigate("ProfileBuyer");
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btnBack} onPress={handleBack}>
                    <FontAwesomeIcon icon={faArrowLeft} size={25} />
                </TouchableOpacity>
                <Text style={styles.title}>Đơn đặt hàng</Text>
            </View>
            <View style={styles.loading}>
                <Text style={styles.titleDetail}>Tất cả đơn hàng</Text>
                {!loadingOrders ? (
                    <TouchableOpacity
                        style={styles.ordersReloadCont}
                        onPress={getAllOrderBuyer}
                    >
                        <FontAwesomeIcon
                            icon={faRotateRight}
                            color="blue"
                            size={25}
                        />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.ordersReloadCont}>
                        <ActivityIndicator color={"blue"} size={25} />
                    </View>
                )}
            </View>
            {listOrders &&
                listOrders.map((item, index) => (
                    <View style={styles.orderItem} key={index}>
                        <View style={styles.orderItemHeader}>
                            <View style={{ width: 220 }}>
                                <Text style={styles.nameProduct}>
                                    Áo khoác lông đẹp cao cấp
                                </Text>
                            </View>
                            <Text style={styles.status}>{item.status}</Text>
                        </View>
                        <View style={styles.orderItemContent}>
                            <Image
                                style={styles.img}
                                source={{ uri: item.image }}
                            />
                            <View style={styles.productInfo}>
                                <Text>Số lượng: {item.quantity}</Text>
                                <Text>Size: {item.size}</Text>
                                <Text>Price: {item.price}</Text>
                            </View>
                        </View>
                    </View>
                ))}
        </View>
    );
};

export default OrderPlaced;
