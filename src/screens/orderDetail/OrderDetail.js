import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
  Alert,
} from "react-native";
import * as services from "../../services/Service";
import { useSelector } from "react-redux";

import styles from "./OrderDetailStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

const OrderDetail = ({ route, navigation }) => {
  const [dataOrder, setDataOrder] = useState({});
  const [loading, setLoading] = useState(false);

  const userInfoFromRedux = useSelector((state) => state);

  useEffect(() => {
    if (route.params) setDataOrder(route.params);
  }, []);

  const handleConfirm = async (id) => {
    try {
      const res = await services.handleConfirmOrder(id);

      if (res.data.EC === 0) {
        navigation.navigate("HomeSeller", {
          userName: userInfoFromRedux.userName,
        });
      } else {
        Alert.alert("Có lỗi, thử lại...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    navigation.navigate("HomeSeller");
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_section}>
        <Text style={styles.topTitle}>Order Details</Text>

        <TouchableOpacity onPress={handleBack} activeOpacity={0.8}>
          <FontAwesomeIcon icon={faLeftLong} size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image style={styles.orderImage} source={{ uri: dataOrder.image }} />
        <Text style={styles.prodName}>{dataOrder.name_product}</Text>
        <ScrollView>
          <View style={styles.infoProd}>
            <Text style={styles.orderName}>
              # Khách hàng: <Text>{dataOrder.name}</Text>
            </Text>
            <Text style={styles.orderName}>
              # Số ĐT:
              <Text style={styles.normalText}>{dataOrder.phone_number}</Text>
            </Text>
            <Text style={styles.orderName}>
              # Địa chỉ:
              <Text style={styles.normalText}>{dataOrder.address}</Text>
            </Text>
          </View>
          <View style={styles.infoProd}>
            <Text style={styles.orderName}>
              # Phương thức thanh toán:
              <Text style={styles.normalText}>{dataOrder.payment_methods}</Text>
            </Text>
            <Text style={styles.orderName}>
              # Số lượng:
              <Text style={styles.normalText}>{dataOrder.quantity}</Text>
            </Text>
            <Text style={styles.orderName}>
              # Size:
              <Text style={styles.normalText}>{dataOrder.size}</Text>
            </Text>
            <Text style={styles.orderName}>
              # Giá:
              <Text style={styles.normalText}>{dataOrder.price}</Text>
            </Text>
          </View>
        </ScrollView>
        {dataOrder.status === "Processing" ? (
          <View style={styles.processCont}>
            <Text style={styles.processText}>PROCESSING...</Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => handleConfirm(dataOrder.id_order_detail)}
            style={styles.btnAdd}
          >
            {loading && <ActivityIndicator color="#fff" />}
            <Text style={styles.btnText}>CONFIRM</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OrderDetail;
