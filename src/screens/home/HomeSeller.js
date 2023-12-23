import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSearch,
  faClose,
  faBars,
  faPlusCircle,
  faCheck,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import * as services from "../../services/Service";

import styles from "./homeSellerStyles";

const HomeSeller = ({ route, navigation, handleToggleDrawer }) => {
  const [search, setSearch] = useState("");
  const [listOrders, setListOrders] = useState([]);
  const [loadingOrders, setloadingOrders] = useState(false);

  const userInfoFromRedux = useSelector((state) => state);

  let { nameShop, userName } = userInfoFromRedux;

  // if (route.params.useName) console.log("sss", route.params.useName);
  const handleAddProduct = () => {
    navigation.navigate("AddProduct");
  };

  const handleAddCategory = () => {
    navigation.navigate("AddCategory");
  };

  const getAllOrder = async () => {
    setloadingOrders(true);
    const res = await services.handleGetAllOrders(
      userName || route.params.userName
    );
    setListOrders(res.data.DT);

    setloadingOrders(false);
  };

  //get all order
  useEffect(() => {
    getAllOrder();
  }, []);

  useEffect(() => {
    getAllOrder();
  }, [route.params]);

  const directToDetail = (order) => {
    navigation.navigate("OrderDetail", order);
  };

  const handleConfirm = async (id) => {
    try {
      await services.handleConfirmOrder(id);

      getAllOrder();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_section}>
        <TouchableOpacity
          onPress={handleToggleDrawer}
          style={styles.barsIconContainer}
        >
          <FontAwesomeIcon style={styles.barsIcon} icon={faBars} />
        </TouchableOpacity>
        <View style={styles.search_container}>
          <FontAwesomeIcon icon={faSearch} />
          <TextInput
            style={styles.search_input}
            placeholder="Search..."
            value={search}
            onChangeText={setSearch}
            // onFocus={() => setIsFocusSearch(true)}
            // onBlur={() => setIsFocusSearch(false)}
          />

          <FontAwesomeIcon icon={faClose} />
        </View>
        <View>
          <Text style={styles.nameShop}>Shop: {nameShop}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.category}>
          <TouchableOpacity
            onPress={handleAddProduct}
            activeOpacity={0.7}
            style={styles.cateItem}
          >
            <FontAwesomeIcon icon={faPlusCircle} />
            <Text style={styles.cateItemTitle}>Add Product</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleAddCategory}
            activeOpacity={0.7}
            style={styles.cateItem}
          >
            <FontAwesomeIcon icon={faPlusCircle} />
            <Text style={styles.cateItemTitle}>Add Category</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.newOrderContainer}>
          <View style={styles.orderTitleCont}>
            <Text style={styles.orderTitle}>New Orders</Text>
            {!loadingOrders ? (
              <TouchableOpacity
                style={styles.ordersReloadCont}
                onPress={getAllOrder}
              >
                <FontAwesomeIcon icon={faRotateRight} color="blue" size={25} />
              </TouchableOpacity>
            ) : (
              <View style={styles.ordersReloadCont}>
                <ActivityIndicator color={"blue"} size={25} />
              </View>
            )}
          </View>
          <ScrollView>
            {listOrders &&
              listOrders.map((item, index) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => directToDetail(item)}
                  key={index}
                  style={styles.orderItem}
                >
                  <Image
                    style={styles.orderImage}
                    source={{ uri: item.image }}
                  />
                  <View style={styles.orderNameCont}>
                    <Text style={styles.name}>
                      {item.name_product.slice(0, 18)}...
                    </Text>
                    <Text style={styles.desc}># {item.name}</Text>
                  </View>
                  {item.status !== "Processing" ? (
                    <TouchableOpacity
                      onPress={() => handleConfirm(item.id_order_detail)}
                      style={styles.btnRejectCont}
                    >
                      <FontAwesomeIcon icon={faCheck} color="red" size={24} />
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.btnAcceptCont}>
                      <Text style={styles.colorBlue}>Processing</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomeSeller;
